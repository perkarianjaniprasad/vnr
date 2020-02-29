import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { GenerateidComponent } from './generateid/generateid.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { BranchComponent } from './branch/branch.component';
import { MarksComponent } from './marks/marks.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { CommonComponent } from './common/common.component';



const routes: Routes = [{path:"adminprofile",component:AdminprofileComponent,
children:[{path:"generateid",component:GenerateidComponent},
{path:"attendance",component:AttendanceComponent},
{path:"branch",component:BranchComponent},
{path:"common",component:CommonComponent},
{path:"marks",component:MarksComponent},
{path:"registerstudent",component:RegisterstudentComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AdminRoutingModule { }
