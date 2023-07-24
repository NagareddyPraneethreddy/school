import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  public students: any = [];
  public data: any = "";
  public top: any = "";
  public bottom: any = "";
  public asc: any = "";
  public dsc: any = "";

  constructor(private studentService: StudentService,private router:Router) {

    this.studentService.getstudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert("Intrnal Server")
      }
    )
  }
    studentfilter(){
    this.studentService.studentfilter(this.data).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Server issue")
      }
    )
    }
    studentpage(){
    this.studentService.studentpage(this.top,this.bottom).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("server")
      }
    )
    }
    studentsort(){
    this.studentService.studentsort(this.asc,this.dsc).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("server")
      }  
    );
    }
    deletestudent(id:any){
    this.studentService.deletestudent(id).subscribe(
      (data:any)=>{
        alert("delete succsfully")
        location.reload()
      },
      (err:any)=>{
        alert("server")
      }
    )

  };
  edit(id:number){
    this.router.navigateByUrl("/dashboard/edit-student/"+id);
  }
  view(id:number){
       this.router.navigateByUrl("/dashboard/student-details/"+id);
  }

}
