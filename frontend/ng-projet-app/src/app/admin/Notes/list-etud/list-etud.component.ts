import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { MatiereService } from '../../Matiere/matiere.service';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etud',
  templateUrl: './list-etud.component.html',
  styleUrls: ['./list-etud.component.css']
})
export class ListEtudComponent  implements OnInit{

  matiere: any;
  student: any;
  note: any;

  constructor(private matieres: MatiereService,
    private students: StudentsService,
    private notes : NotesService,
    private router:Router){}

    ngOnInit(){
      this.notes.getNotes()
        .subscribe((data: any) => {
          this.note = data;
          console.log(this.note);
  
        })

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
    }
    submit(note: any){
      console.log (note.id)
      this.router.navigate(['details/'+note.id])
      this.matiere.getMatieres(this.matiere.id_matiere)
      .subscribe((data:any)=>{
      })
    }
    // details(){
    //   this.matiere.getMatieres(this.matiere.id_matiere)
    //   .subscribe((data:any)=>{

    //   })
    // }
}
