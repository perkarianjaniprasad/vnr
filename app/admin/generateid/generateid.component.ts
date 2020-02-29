import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-generateid',
  templateUrl: './generateid.component.html',
  styleUrls: ['./generateid.component.css']
})
export class GenerateidComponent implements OnInit {

  constructor(private ds:DataService) { }
data:any[]=[]
  ngOnInit() {
    this.ds.gen().subscribe((obj)=>{
      this.data=obj["message"]
      console.log(this.data)
    })
  }

  generateid(obj)
  {
    obj.count=1;
    console.log(obj)
    this.ds.id(obj).subscribe((obj)=>{
      if(obj["message"]=="success"){
        alert("id generated successfully")
        this.ngOnInit();
      }
      else if(obj["message"]=="id generated already")
      {
        alert("id generated already")
        this.ngOnInit();
      }
    })


}

}
