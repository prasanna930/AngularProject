import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {
  title1=" ";
  registrationform: FormGroup;
  patientarr: string [];
  i:number;
  patientarrLen : number;
  submitted=false;
  errMsg : boolean=false;
 
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   constructor(private form: FormBuilder,private httpService:HttpClient, private router: Router) {
       // this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
       this.registrationFormValidation();
   }

   ngOnInit() { }

   registrationFormValidation() {
       this.registrationform = this.form.group({
           name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          //  name1: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          //  email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
           password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
           // password:['',Validators.required,Validators.minLength(5)]
       })

     
    
   }
   

   onSubmit(){
this.submitted=true;
console.log(this.registrationform );
this.httpService.get('http://localhost:4202/pro/getItems').subscribe(
      data => {
        // this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        console.log(data);      
         this.patientarr = data as string [];
        this.patientarrLen = this.patientarr.length;
        console.log(this.patientarrLen);
         
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
        console.log(err);

      }
    );
    for(this.i =0;this.i<=this.patientarrLen-1;this.i++) {
      if(this.registrationform.get('name').value==this.patientarr[this.i]['dname'] && this.registrationform.get('password').value==this.patientarr[this.i]['dpassword']){
        console.log("success");
      }
      else{
        console.log("failuer");
       // this.errMsg=true;
      }
    }
  }
    
   }



