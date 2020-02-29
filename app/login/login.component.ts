import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit() {
    setTimeout(()=>{
    this.ds.logout()
  },0);
}
//login functionality and diverting to admin mdule
login(data){
  console.log(data)
  if(data.role=="admin"){
    if(data.id!=="admin"){
      alert("invalid username")
    }
    else if(data.password!=="admin"){
      alert("invalid password")
    }
    else{
      alert("login successfully")
      this.ds.loggedinStatus=true
      this.router.navigate(['/adminprofile'])

    }

  }
  else if(data.role=="student")
  {
    this.ds.studentLogin(data).subscribe((res)=>{
      if(res["message"]=="invalid-studentid"){
        alert("invalid student id")
      }
      else if(res["message"]=="invalid-password"){
        alert("invalid-password")
      }
      else{
        alert("login successfully")
        this.ds.loggedinUser=res["name"]
        this.ds.loggedinStatus=true;
        this.router.navigate(['/studentprofile']);
      }
    })
  }
  else{
    alert("please choose role")
  }
}
}
