import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-readattendance',
  templateUrl: './readattendance.component.html',
  styleUrls: ['./readattendance.component.css']
})
export class ReadattendanceComponent implements OnInit {

  studentdata=this.ds.loggedinUser;
  getstudentid=this.studentdata.studentid;
  attendencedata;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getStudentData(this.getstudentid).subscribe((res)=>{
      if(res['message']=="no data found with given student id")
      {
        alert("no data found with given student id")
      }
      else
      {
        this.attendencedata=res["message"]
        console.log(this.attendencedata)
      }
    })

  }

}