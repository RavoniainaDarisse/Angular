import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { MatiereService } from '../../Matiere/matiere.service';
import { StudentsService } from 'src/app/students.service';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-notes',
  templateUrl: './insert-notes.component.html',
  styleUrls: ['./insert-notes.component.css']
})
export class InsertNotesComponent implements OnInit {
  matiere: any;
  student: any;

  constructor(private formBuilder: FormBuilder,
    private matieres: MatiereService,
    private students: StudentsService,
    private noteservice: NotesService,
    private router:Router) { }

    addForm !: FormGroup  ;

  ngOnInit() {
    this.matieres.getMatiere()
      .subscribe((data: any) => {
        this.matiere = data;
        console.log(this.matiere);

      })

    this.students.getStudents()
      .subscribe((data: any) => {
        this.student = data;
        console.log(this.student);

      })

      this.addForm = this.formBuilder.group({
        Nom:['',Validators.required],
        Codemat:['',Validators.required],
        note:['',Validators.required]
      })
  }

  onSubmit(){
    
    this.router.navigate(['admin/viewN'])
    this.noteservice.createNote(this.addForm.value)
    .subscribe((data: any)=>{
    })
  }

}
