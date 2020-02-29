import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  constructor(private ds:DataService) { }
  profile:any=this.ds.loggedinUser
// username=this.ds.loggedinUser
  ngOnInit() {
  }

}
