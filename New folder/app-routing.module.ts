import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { BodyComponent } from './body/body.component';
import { Form1Component } from './form1/form1.component';
import { DoctorspageComponent } from './doctorspage/doctorspage.component';
import { DocComponent } from './doc/doc.component';
import { HhomepageComponent } from './hhomepage/hhomepage.component';
import { PatientproblemComponent } from './patientproblem/patientproblem.component';
import { FormbuildComponent } from './formbuild/formbuild.component';
import { AssignDoctorComponent } from './assign-doctor/assign-doctor.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  {
    path:'', redirectTo:'template',pathMatch:'full'},
  {
    path:'body', component:BodyComponent},
  {
    path:'form1', component:Form1Component},
   {
      path:'doctorspage', component:DoctorspageComponent},

      {
        path:'doc', component:DocComponent},

        {
          path:'patientlogin', component:PatientloginComponent},


         {
            path:'hhomepage', component:HhomepageComponent},
            {
              path:'patientproblem', component:PatientproblemComponent},

              {
                path:'assigndoctor', component:AssignDoctorComponent},

                {
                  path:'adminlogin', component:AdminLoginComponent},
                  {
                    path:'template', component:TemplateComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents= [AssignDoctorComponent, AdminLoginComponent,Form1Component,DoctorspageComponent, DocComponent, PatientloginComponent, HhomepageComponent, PatientproblemComponent]
