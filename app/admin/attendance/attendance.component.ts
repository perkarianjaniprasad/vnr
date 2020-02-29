import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  file:File;
  attendence;
  fileUpload(filedata){
    this.file=filedata.target.files[0]
}
  constructor( private ds:DataService) { }
  

  ngOnInit() {
    this.ds.getAttendence().subscribe((read)=>{
      if(read["message"]=="no attendence data")
      {
        alert("no attendence data ")
      }
      else
      {
        this.attendence=read['message']
        console.log(this.attendence)
      }
        })
  }
  
  uploadattendance(data){
    let formdata =new FormData();
    formdata.append("branch",data.branch)
    formdata.append("year",data.year)
    formdata.append("attendence",this.file,this.file.name);
    this.ds.setAttendence(formdata).subscribe((res)=>{
      if(res["message"]=="Attendence Sheet uploaded successfully")
      {
      alert(res["message"]);
      }
      else if(res["err_desc"]=="Corupted excel file"){
      alert(res["err_desc"]);
      }
    })
      
    
      }
    

  }


