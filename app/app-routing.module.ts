import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { MechComponent } from './mech/mech.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { CivilComponent } from './civil/civil.component';


const routes: Routes = [{path:"",redirectTo:"home",pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"department",component:DepartmentComponent},
{path:"mech",component:MechComponent},
{path:"cse",component:CseComponent},
{path:"ece",component:EceComponent},
{path:"civil",component:CivilComponent},
{path:"aboutus",component:AboutusComponent},
{path:"contactus",component:ContactusComponent},
{path:"login",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
