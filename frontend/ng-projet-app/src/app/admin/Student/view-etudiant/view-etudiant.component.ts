import { Component,OnInit } from '@angular/core';
import { Student } from '../../../student';
import { StudentsService } from '../../../students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-etudiant',
  templateUrl: './view-etudiant.component.html',
  styleUrls: ['./view-etudiant.component.css'],
  
})
export class ViewEtudiantComponent implements OnInit {

  students: any;
    id: any;
  searchValue: any;

  constructor(private studentservice : StudentsService ,
    private router:Router){}

  ngOnInit() {
    this.studentservice.getStudents()
    .subscribe((data: any)=>{
      this.students = data;
      console.log(this.students);

    })
  }
  delete( students: any ): void{
    this.studentservice.deletStudents(students.id)
    .subscribe((data)=>{
      this.students = this.students.filter((u: any) => u !== students);

    })
    
  }
  edit(students: any){
        this.id = students.id;
        this.router.navigate(['admin/edit/'+this.id])
  }
}
