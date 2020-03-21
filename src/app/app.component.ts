import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  submitted = false;
  form: FormGroup;
  genders = [
    {id: 1, label: 'Male'},
    {id: 2, label: 'Female'},
    {id: 3, label: 'None'},
  ];
  user1 = {
    user: {
      name: 'Iron man',
      email: 'iron@man.com',
      age: 30,
      gender: 1
    },
    address: {
      city: 'Mumbai',
      state: 'Maharashtra'
    }
  };
  user2 = {
    user: {
      name: '',
      email: '',
      age: 10,
      gender: 1
    },
    address: {
      city: 'Pune'
    }
  };
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      user: this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        age: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required]
      })
    });
  }

  get fm(){return this.form.controls;}

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.printModal();
  }

  reset(){
    this.form.reset();
  }

  resetAddress(){
    this.form.controls.address.reset();
  }

  patchUser(userId){
    if(userId === 1){
      this.form.patchValue(this.user1);
    } else {
      this.form.patchValue(this.user2);
    }
  }

  printModal(){
    console.log(this.form.getRawValue());
  }
}
