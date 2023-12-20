


import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { Student } from '../../../student';
import { StudentsService } from '../../../students.service';
import { Router ,Params,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edite-etudiant',
  templateUrl: './edite-etudiant.component.html',
  styleUrls: ['./edite-etudiant.component.css']
})
export class EditeEtudiantComponent implements OnInit {
  // routes: any;

  constructor(private formBuilder: FormBuilder ,
    private studentservice : StudentsService ,
    private router:Router,
    private routes:ActivatedRoute,
    ){
 }
 
 addForm !: FormGroup  ;

 ngOnInit() {
  this.addForm = this.formBuilder.group({
    Nom: ['', Validators.required],
    Prenom: ['', Validators.required],
    Niveau: ['', Validators.required],
    Numero_Net: ['', Validators.required]
  });

  const routeParams = this.routes.snapshot.params;
  this.studentservice.getStudentById(Number(routeParams['id']))
    .subscribe((data: any) => {
      this.addForm.patchValue({
        Nom: data.Nom,
        Prenom: data.Prenom,
        Niveau: data.Niveau,
        Numero_Net: data.Numero_Net
      });
    });
    console.log(routeParams['id'])
}
  onEdit(){
    const routeParams = this.routes.snapshot.params;

    const editedStudent: any = {
      id: routeParams['id'],
      Nom: this.addForm.get('Nom')?.value,
      Prenom: this.addForm.get('Prenom')?.value,
      Niveau: this.addForm.get('Niveau')?.value,
      Numero_Net: this.addForm.get('Numero_Net')?.value
    };

    this.studentservice.updateStudent(editedStudent.id, editedStudent)
      .subscribe((data: any) => {
        console.log(data);
      });
   
  }

}
