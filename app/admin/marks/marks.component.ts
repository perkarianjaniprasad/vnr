import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  file:File;
  marks;
  fileUpload(filedata){
    this.file=filedata.target.files[0]
  }
  
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getMarks().subscribe((read)=>{
      if(read["message"]=="no marks data")
      {
        alert("no marks data ")
      }
      else
      {
        this.marks=read['message']
        console.log(this.marks)
      }
        })
  }


  uploadattendance(data){
    let formdata =new FormData();
    formdata.append("branch",data.branch)
    formdata.append("year",data.year)
    formdata.append("marks",this.file,this.file.name);
    this.ds.setMarks(formdata).subscribe((res)=>{
      if(res["message"]=="marks Sheet uploaded successfully")
      {
      alert(res["message"]);
      }
      else if(res["err_desc"]=="Corupted excel file"){
      alert(res["err_desc"]);
      }
    })
    }

   
}
