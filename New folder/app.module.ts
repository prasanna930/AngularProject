import { DocComponent } from './doc/doc.component';
import { DoctorspageComponent } from './doctorspage/doctorspage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { InterpolComponent } from './interpol/interpol.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { CommunicationComponent } from './communication/communication.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';


import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { MultipleComponent } from './multiple/multiple.component';
import { Multiple1Component } from './multiple/multiple1/multiple1.component';
import { ReversePipe } from './reverse.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { ModComponentComponent } from './vmod/mod-component/mod-component.component';
import { ModModule } from './mod/mod.module';
import { Form1Component } from './form1/form1.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormbuildComponent } from './formbuild/formbuild.component';
import { RoutingComponent } from './routing/routing.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { HhomepageComponent } from './hhomepage/hhomepage.component';
import { PatientproblemComponent } from './patientproblem/patientproblem.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AssignDoctorComponent } from './assign-doctor/assign-doctor.component';
import { HospitalComponent } from './hospital/hospital.component';
import { TemplateComponent } from './template/template.component';
import { Demo3Component } from './demo3/demo3.component';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';

import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    InterpolComponent,
    DirectiveComponent,
    CommunicationComponent,
    CrudComponent,

    ParentComponent,
    ChildComponent,
    PipesComponent,
    MultipleComponent,
    Multiple1Component,
    ReversePipe,
    SqrtPipe,
    ModComponentComponent,
    Form1Component,
    FormbuildComponent,
    RoutingComponent,
    RoutingComponents,
    HomepageComponent,
    DoctorspageComponent,
    DocComponent,
    PatientloginComponent,
    HhomepageComponent,
    PatientproblemComponent,
    AdminLoginComponent,
    AssignDoctorComponent,
    HospitalComponent,
    TemplateComponent,
    Demo3Component





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    PanelModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ToastModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

