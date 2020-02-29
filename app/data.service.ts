import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bcode;
toSer;
toCommon()
{
  return this.toSer
}
  constructor(private hc:HttpClient) { }
//logout process
loggedinStatus:boolean
loggedinUser:any
logout(){
  this.loggedinStatus=false
}

//post data
  register(data):Observable<any>
  {
    data.branchcode=this.bcode
    return this.hc.post('/save',data)
  }

//read data
Getdata(obj):Observable<any>
{
 return this.hc.get(`/readAll/${obj}`)
}


//delet the data
Delete(obj):Observable<any>
{
  return this.hc.delete(`/remove/${obj.phonenumber}`)
}

//update the data
update1(data):Observable<any>
{
  return this.hc.put('/update',data)
}

//generated id
id(data):Observable<any>
{
  this.bcode=data.branchcode
  return this.hc.post('/savebyyear',data)
}


//to read year wise
sortByYear(byyear):Observable<any>
{
console.log(byyear);
return this.hc.post('/readbyyear',byyear)
}

gen():Observable<any>{
  return this.hc.get<any>('/idread')
}
// att(obj):Observable<any>{
//   return this.hc.post('/uploadattendence',obj)
// }

studentLogin(obj){
  console.log(obj)
  return this.hc.post('/login',obj)
}


setAttendence(obj):Observable<any>
 {
   return this.hc.post<any>('/uploadattendence',obj)
 }
 getAttendence():Observable<any>
 {
   return this.hc.get<any>('/readbyattendence')
 }

 getStudentData(obj):Observable<any>
 {
   return this.hc.get(`/getstudentattendence/${obj}`)
 }

 setMarks(obj):Observable<any>
 {
   return this.hc.post('/uploadmarks',obj)
 }

 getMarks():Observable<any>
 {
   return this.hc.get<any>('/readbymarks')
 }

 StudentMarks(obj):Observable<any>
 {
   return this.hc.get<any>(`/readmarks/${obj}`)
 }
 
}
