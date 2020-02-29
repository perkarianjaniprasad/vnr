import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GenerateidComponent } from './generateid/generateid.component';
import { BranchComponent } from './branch/branch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarksComponent } from './marks/marks.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import {FormsModule} from '@angular/forms';
import { CommonComponent } from './common/common.component';
import { CommonPipe } from './common.pipe';


@NgModule({
  declarations: [GenerateidComponent, BranchComponent, AttendanceComponent, MarksComponent, RegisterstudentComponent, AdminprofileComponent, CommonComponent, CommonPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  
    
  ]
})
export class AdminModule { }
