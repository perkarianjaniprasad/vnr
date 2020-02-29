import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private router:Router, private ds:DataService) { }
  k;
  ngOnInit() {
  }
  Submit1(obj)
  {
    console.log(obj);
    this.k=obj  
    this.router.navigate(['/adminprofile/common'])
    this.ds.toSer=obj
  }
  
}
