import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    class: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    date: new FormControl(),
    male: new FormControl(),
    female: new FormControl(),
    address: new FormGroup({
      line: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pin: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    marks: new FormArray([]),
    type: new FormControl(),
    bus: new FormControl(),
    hostel: new FormControl(),
    text: new FormControl(),

  });

  get marksFormArray() {
    return this.studentForm.get('marks') as FormArray;
  }
  add() {
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
      })
    )
  }
  submit(){
    console.log(this.studentForm);
  }
  remove(i:number){
    this.marksFormArray.removeAt(i)
  }


}
