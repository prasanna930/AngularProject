import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  registrationform: FormGroup;
  submitted=false;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   constructor(private form: FormBuilder) {
       // this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
       this.registrationFormValidation();
   }

   ngOnInit() { }

   registrationFormValidation() {
       this.registrationform = this.form.group({
           name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
           email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
           password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
           // password:['',Validators.required,Validators.minLength(5)]
       })
   }
   

   onSubmit(){
this.submitted=true;
   }
}



	
	
	

