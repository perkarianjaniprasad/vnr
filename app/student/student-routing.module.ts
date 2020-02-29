import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ReadmarksComponent } from '../studentprofile/readmarks/readmarks.component';
import { ReadattendanceComponent } from '../studentprofile/readattendance/readattendance.component';


const routes: Routes = [{path:"studentprofile",component:StudentprofileComponent,
children:[{path:"readmarks",component:ReadmarksComponent},
{path:"readattendance",component:ReadattendanceComponent}]}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
