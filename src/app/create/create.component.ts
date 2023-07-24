import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    class: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(),
    male: new FormControl(),
    female: new FormControl(),
    fatherName: new FormControl(),
    avatar:new FormControl(),
    address: new FormGroup({
      addressline: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)]),
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
        percentage: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      })
    )
  }
  public id: any = "";
  constructor(private studentservice: StudentService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        studentservice.getstudent(this.id).subscribe(
          (data: any) => {
            this.studentForm.patchValue(data);
          }
        )
      }

    )

  }
  submit() {
    console.log(this.studentForm);
    if (this.id?.length > 0) {
      this.studentservice.updatestudent(this.id, this.studentForm.value).subscribe(
        (data: any) => {
          alert("account updated successfully");
        },
        (err: any) => {
          alert('account updation failed');
        }
      )

    }

    else {
      this.studentservice.addstudents(this.studentForm.value).subscribe(
        (data: any) =>{
          alert("added Successfully")
        },
      
      (err: any) => {
        alert("Student Not added")
      }
      )
      
    }

  }
  remove(i: number) {
    this.marksFormArray.removeAt(i)
  }


}
