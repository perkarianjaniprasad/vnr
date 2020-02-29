import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MechComponent } from './mech/mech.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { CivilComponent } from './civil/civil.component';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http'
import { StudentModule } from './student/student.module';
import { ReadmarksComponent } from './studentprofile/readmarks/readmarks.component';
import { ReadattendanceComponent } from './studentprofile/readattendance/readattendance.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    MechComponent,
    CseComponent,
    EceComponent,
    CivilComponent,
    ReadmarksComponent,
    ReadattendanceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    HttpClientModule,
    StudentModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
