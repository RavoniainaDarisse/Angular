import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { MatiereService } from '../../Matiere/matiere.service';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  matiere: any;
  student: any;
  note:any;

  constructor(private matieres: MatiereService,
    private students: StudentsService,
    private notes : NotesService){}

    ngOnInit(){
      
      this.matieres.getMatiere()
    .subscribe((data: any)=>{
      this.matiere = data;

      console.log(this.matiere.id_matiere);
    })
    this.notes.getNotes()
    .subscribe((data: any)=>{
      this.note = data;

      console.log(this.matiere.id_matiere);
    })
       
      // this.students.getStudentss()
      //   .subscribe((data: any) => {
      //     this.student = data;
      //     console.log(this.student);
  
      //   })
    }
    details(){
      this.matieres.getMatieres(this.matiere.id_matiere)
      .subscribe((data)=>{ 
        this.matiere = data;
        
      console.log(this.matiere);
  
      })
    }
    
}
