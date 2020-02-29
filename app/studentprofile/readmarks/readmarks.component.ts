import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-readmarks',
  templateUrl: './readmarks.component.html',
  styleUrls: ['./readmarks.component.css']
})
export class ReadmarksComponent implements OnInit {
  studentdata=this.ds.loggedinUser;
  getstudentid=this.studentdata.studentid;
readmarks;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.StudentMarks(this.getstudentid).subscribe((res)=>{
      if(res['message']=="no data found with given student id")
      {
        alert("no data found with given student id")
      }
      else
      {
        this.readmarks=res["message"]
        console.log(this.readmarks)
      }
    })

  }

}
  