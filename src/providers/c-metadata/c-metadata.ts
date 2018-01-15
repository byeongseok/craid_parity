//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the CMetadataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CMetadataProvider {
  public file_uid: any;
  //public csps: any;
  //public split_order:JSON;
  public csp_name:string=null;
  public split_names:Array<string>=[];
  public split_size:number;
  public split_fileid:string=null;
  public isAscii: boolean=null;
  public isEncrypted: boolean=null;
  public secretKey: any=null;
  public isRaid: boolean=null;
  public remainingByte: string='';
  constructor(
    //public http: HttpClient
  ) {
    //console.log('Hello CMetadataProvider Provider');
  }

  get fileUid(): any{
    return this.file_uid;
  }
  /*
  get splitOrder():JSON{
    return this.split_order;
  }
  */
  get cspName():string{
    return this.csp_name;
  }
  get splitName():Array<string>{
    return this.split_names;
  }
  get splitSize(): number{
    return this.split_size;
  }
  get splitFileID(): string{
    return this.split_fileid;
  }
  get fileType(): boolean{
    return this.isAscii;
  }
  get operationType(): boolean{
    return this.isEncrypted;
  }
  get secretKeys(): any{
    return this.secretKey;
  }
  get raidType(): boolean{
    return this.isRaid;
  }
  get remainingBytes():string{
    return this.remainingByte;
  }


  set fileUid(File_uid:any){
    this.file_uid=File_uid;
  }
  /*
  set splitOrder(Split_order:JSON){
    this.split_order=Split_order;
  }
  */
  set cspName(Csp_name:string){
    this.csp_name=Csp_name;
  }
  set splitName(Split_names:Array<string>){
    this.split_names= Split_names;
  }
  set splitSize(Split_size:number){
    this.split_size=Split_size;
  }
  set splitFileID(Split_fileid:string){
    this.split_fileid=Split_fileid;
  }
  set fileType(IsAscii:boolean){
    this.isAscii=IsAscii;
  }
  set operationType(IsEncrypted:boolean){
    this.isEncrypted=IsEncrypted;
  }
  set secretKeys(SecretKey:any){
    this.secretKey=SecretKey;
  }
  set raidType(IsRaid:boolean){
    this.isRaid=IsRaid;
  }
  set remainingBytes(remain:string){
    this.remainingByte=remain;
  }


}
