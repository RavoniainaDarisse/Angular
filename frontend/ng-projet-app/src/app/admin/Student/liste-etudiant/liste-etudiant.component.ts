import { Component,OnInit } from '@angular/core';
import { Student } from '../../../student';
import { StudentsService } from '../../../students.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit {

  students: any;
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
}
