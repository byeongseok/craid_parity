import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { CMetadataProvider } from '../../providers/c-metadata/c-metadata';
import { FilePath } from '@ionic-native/file-path';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import X2JS from 'x2js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CMetadataProvider]
})
export class HomePage {
  originalFileSize;
  sourceFilePath: string;
  sourceFileName: string;
  contents: any;
  splitSize: number;
  msg: string;
  cmeta = new CMetadataProvider();
  public count: number = 0;
  timeStamp1;
  timeStamp2;
  timeInterval1: number;
  timeInterval2: number;

  constructor(public navCtrl: NavController,
    public file: File,
    public ofile: File,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {

  }

  chooseFile() {
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(nativeUrl => {
        this.sourceFilePath = nativeUrl.substring(0, nativeUrl.lastIndexOf('/'));
        this.sourceFileName = nativeUrl.substring(nativeUrl.lastIndexOf('/') + 1, nativeUrl.length);
        this.file.resolveDirectoryUrl(this.sourceFilePath).then(directoryEntry => {
          this.file.getFile(directoryEntry, this.sourceFileName, {}).then(fileEntry => {
            fileEntry.getMetadata((metadata) => {
              this.originalFileSize = metadata.size;
              alert("size: " + metadata.size);
              //alert('file path: ' + this.path);
              //this.writeSplitFile(this.size);
              this.showConfirm();
            });
          });
        });
      });
    });
  }

  writeSplitFile(originalFilePath, originalFileName, size) {
    var splitnames: Array<string> = [];
    var splitSize: number;
    splitSize = Math.floor(size / 4);
    this.cmeta.splitSize = splitSize; //set split size
    this.file.readAsArrayBuffer(originalFilePath, originalFileName).then(arrayBuffer => {
      let i: number;
      for (i = 0; i < 4; i++) {
        const blob = new Blob([new Uint8Array(arrayBuffer, i * splitSize, splitSize)]);
        this.contents = blob;
        this.file.writeFile(originalFilePath, (i).toString()+"_"+originalFileName, this.contents, { replace: true });
        splitnames.push((i).toString()+"_"+originalFileName);
        if (i == 3) {
          if (size % 4 != 0) {
            this.cmeta.remainingBytes = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer, (i + 1) * splitSize, size % 4));
          }
        }
      }
    }).then(() => {
      this.cmeta.splitName = splitnames;
      //this.showToast("Finish split file");
      let timeStamp2 = new Date();
      alert((timeStamp2.getTime() - this.timeStamp1.getTime()).toString());
      this.makeMetaFile(this.cmeta);
    });
  }

  makeMetaFile(cmeta) {
    var parser: any = new X2JS();
    var fd: any;
    var splitCount: number = cmeta.splitName.length;
    var splitfiles: any = [];

    for (let i: number = 1; i <= splitCount; i++) {
      splitfiles.push({ 'sFileName': cmeta.splitName[i - 1], 'sFileSize': cmeta.splitSize, '_order': i.toString() });
    }
    fd = { "FILE": { "SplitFile": splitfiles, "RemaingBytes": cmeta.remainingBytes } }
    let content = parser.js2xml(fd);
    this.file.writeFile(this.sourceFilePath, 'test.xml', content, { replace: true });
  }


  writeMergeFile(filePath,fileName, buf) {
    let bb = new Blob([]);
    let i = 0;
    for (i; i < buf.length; i++) {
      bb = new Blob([bb, buf[i]]);
    }
    if (i == buf.length) {
      this.ofile.writeFile(filePath, 'merge_'+fileName, bb, { replace:true }).then(() => {
        let timeStamp2 = new Date();
        alert((timeStamp2.getTime() - this.timeStamp1.getTime()).toString());
      });
    }
  }

  mergeFiles(filePath, fileName) {
    var parser: any = new X2JS();
    var meta: any;
    var buf = new Array();
    var count = 0;
    this.file.readAsText(filePath, fileName).then(str => {
      meta = parser.xml2js(str);
      for (let i: number = 0; i < meta["FILE"]["SplitFile"].length; i++) {
        this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(arrayBuffer => {
          buf[i] = arrayBuffer;
          count++;
          if (count == meta["FILE"]["SplitFile"].length) {
            this.writeMergeFile(filePath,fileName, buf);
          }
        });
      }
    });
  }


  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Split File',
      message: this.sourceFileName,
      buttons: [
        {
          text: 'Split',
          handler: () => {
            this.timeStamp1 = new Date();
            this.showToast('1: ' + this.timeStamp1.getTime());
            //this.timeStamp.getMilliseconds();
            this.writeSplitFile(this.sourceFilePath, this.sourceFileName, this.originalFileSize);
          }
        },
        {
          text: 'Merge',
          handler: () => {
            this.timeStamp1 = new Date();
            this.showToast('1: ' + this.timeStamp1.getTime());
            this.mergeFiles(this.sourceFilePath, this.sourceFileName);
          }
        },
        { text: 'Cancel' }]
    });
    confirm.present();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}

  /*
      this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(arrayBuffer => {
        const blob = new Blob([new Uint8Array(arrayBuffer)]);
        buf.push(blob);
        //return this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
        if(buf.length==meta["FILE"]["SplitFile"].length){
          alert(buf.length);
          for (let n:number=0;n<buf.length;n++){
           // alert(buf[n]);
            this.file.writeFile(filePath, 'new.txt', buf[n], { append: true, replace: false });
          }
        }
      });
    }
    /*
    alert(buf.length);
    for (let n:number=0;n<buf.length;n++){
      this.file.writeFile(filePath, 'new.txt', buf[n], { append: true, replace: false });
    }
  });
}
    /*
    for (let i: number = 0; i < bloob.length; i++) {
      this.file.writeFile(filePath, 'new.txt', bloob[i], { append: true, replace: false });
    }*/
  //});
  /*
  //alert(typeof(str.toString()));
  //meta = parser.xml2js(str);
  for (let i: number = 0; i < meta["FILE"]["SplitFile"].length; i++) {
    this.file.readAsArrayBuffer(filePath, meta["FILE"]["SplitFile"][i]['sFileName']).then(arrayBuffer => {
      const blob = new Blob([new Uint8Array(arrayBuffer)]);
      this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false }).catch(error => {
        alert("write " + JSON.stringify(error));
      });
    }).catch(error => {
      alert("read " + JSON.stringify(error));
    })
  }
      /* for (let i: number = 0; i < splitCount; i++) {
         this.file.readAsArrayBuffer(filePath, sd[i]['sFileName']).then(arrayBuffer => {
           const blob = new Blob([new Uint8Array(arrayBuffer)]);
           this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
         });
         /*
         result = this.file.checkFile(filePath, sd[i]['sFileName']);
         if (result) {
           this.file.readAsArrayBuffer(filePath, sd[i]['sFileName']).then(arrayBuffer => {
             const blob = new Blob([new Uint8Array(arrayBuffer)]);
             this.file.writeFile(filePath, 'new.txt', blob, { append: true, replace: false });
           });
         } else {
           alert("There is no " + sd[i]['sFileName']);
           break;
         }
    }*/

  /*.then(() => {
      this.showToast("Finish merge file");
    });*/
  // }


