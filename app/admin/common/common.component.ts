import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  constructor(private ds:DataService,private router:Router) { }
  data:any=[];
  data1;
  searchTerm;
  ngOnInit() {
    this.data1=this.ds.toCommon();
      console.log(this.data1);
    this.ds.Getdata(this.data1).subscribe((read)=>
    {
      this.data=read["message"]
      
     
    })
  }
  studentRegister(obj){
    this.ds.register(obj).subscribe((obj)=>{
      if(obj["message"]=="success"){
        alert("register successfully")
        this.ngOnInit();
      }
    })
} 


//read all years
obj={'yearofjoin':0,'department':''}
changeYear(yearofjoin:any){
  if(yearofjoin==='all'){
    this.ngOnInit();
  }
  else{
    console.log(yearofjoin);
    this.obj.yearofjoin=yearofjoin;
    this.obj.department=this.data1;
    console.log(this.obj);
    this.ds.sortByYear(this.obj).subscribe((dataArray)=>{
      if(dataArray['message']==="nodatafound"){
        alert("no data found")
      }
      else{
        console.log(dataArray['message']);
        this.data=dataArray['message']
        console.log(this.data);
      }
    })
  }
}



//update
ed:any=[];
update(da){
  this.ed=da;
}


updateRegister(obj){
  console.log(obj)
   this.ds.update1(obj).subscribe((data)=>{
if(data["message"]=="no updates"){
  alert("data not found")
}
 else if(data["message"]=="success"){
  alert("updated successfully")
  console.log("updated successfully")
  this.ngOnInit();
}
  })
}

//delete
doDelete(data){
  var a=confirm("are you sure you want to delete")
  if(a==true)
  {
    this.ds.Delete(data).subscribe((res)=>
    {
      if(res["message"]=="success"){
        alert("successfully deleted")
      this.ngOnInit();
      }
    })
  }
  else{
    this.ngOnInit
  }
}

public downloadFile(): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames:
  ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type:
  'array' });
  this.saveAsExcelFile(excelBuffer, 'excelFileName');
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() +
  EXCEL_EXTENSION);
  }
 
  downloadPDF(){
   const doc = new jsPDF()
   var col=["firstname","lastname","m","phone number","emailid","department","yearofjoin","ssc","inter"]
   var rows=[];
   this.data.forEach(element=>{
   let firstname=element.firstname;
   let lastname=element.lastname
   let m=element.m;
   let phonenumber=element.phonenumber;
   let emailid=element.emailid;
   let department=element.department;
   let yearofjoin=element.yearofjoin;
   let ssc=element.ssc;
   let inter=element.inter
   let temp=[firstname,lastname,m,phonenumber,emailid,department,yearofjoin,ssc,inter]
   rows.push(temp)
   })
   doc.autoTable(col,rows,{
   theme:'grid'
   })
   doc.save('first.pdf')
  }


}
