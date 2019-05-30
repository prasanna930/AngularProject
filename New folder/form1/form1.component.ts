// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




// @Component({
//   selector: 'app-form1',
//   templateUrl: './form1.component.html',
//   styleUrls: ['./form1.component.css']
// })

// export class Form1Component implements OnInit {
//   Registartionform: FormGroup;
//   submitted= false;
//   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


//   constructor(private fb: FormBuilder) {



// }

//   ngOnInit() {
//     // this.Registartionform= new FormGroup({
//     //   name1:new FormControl(),
//     //   CreateUserid: new FormControl(),
//     //   ReenterUserid: new FormControl(),
//     //   gender: new FormControl(),

//     //   address: new FormGroup({
//     //     city: new FormControl(),
//     //     state: new FormControl(),
//     //     pincode: new FormControl(),
//     //     city1: new FormControl(),


//         this.Registartionform= this.fb.group({
//           name1:['', Validators.compose([Validators.required, Validators.minLength(3)])],
//           CreateUserid: ['',Validators.compose([Validators.required, Validators.minLength(6)]) ],
//           ReenterUserid: [''],
//           gender: [''],

//           address: this.fb.group({
//             city:['vskp'],
//             state: [''],
//             pincode: [''],
//             city1: ['']


//       })
//     });
//   }
// get i() { return this.Registartionform.controls}

// onSubmit() : void {
//   console.log(this.Registartionform.controls.name1.value);
//   console.log(this.Registartionform.touched);
//   console.log(this.Registartionform.controls.CreateUserid.value);
//   this.submitted=false;
//   if(this.Registartionform.invalid){
//     return;
//   }
// alert('SUCCESS')
// }

// }

// }

import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// export class PatientRegClass{
//   public id: Int32Array;
//   public fname: String;
//   public lname: String;
//   public dpassword:String;
//   public gender: String;
//   public uname: String;
//   public problem: String;
//   public city: String;
//   public cnumber: Int32Array
// }

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  providers: [MessageService],
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;
  errMsg :any;
  constructor(private fb: FormBuilder, private messageService: MessageService, private httpService: HttpClient) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'problem': new FormControl(''),
      'city': new FormControl('', Validators.required),
      'contactnumber': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: '' });
    this.genders.push({ label: 'Male', value: 'Male' });
    this.genders.push({ label: 'Female', value: 'Female' });
  }

  onSubmit(value: string) {
    this.submitted = true;
    console.log(this.userform);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    //insert to backend
    this.httpService.post('http://localhost:1254/pro/addItem', {
      //id: 8,
      fname: this.userform.get('firstname').value,
      lname: this.userform.get('lastname').value,
      dpassword: this.userform.get('password').value,
      gender: this.userform.get('gender').value,
      uname: this.userform.get('username').value,
      problem: this.userform.get('problem').value,
      city: this.userform.get('city').value,
      cnumber:this.userform.get('contactnumber').value,
  },{responseType:'text'}).subscribe(
    data => {
      //this.errMsg = data as string;
      console.log(data);
      // console.log(JSON.stringify({data}));
    },
    (err : HttpErrorResponse) => {
      console.log(err);
    }
  )
}


get diagnostic() { return JSON.stringify(this.userform.value); }

}