import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  public id: any = "";
  public student: any = "";
  constructor(private activateRoute: ActivatedRoute, private studentService: StudentService) {

    activateRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

      }
    )
    studentService.getstudent(this.id).subscribe(
      (data:any)=>{
        this.student=data;
      }
    )
  }
}
