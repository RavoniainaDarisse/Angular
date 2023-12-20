import { Component ,OnInit} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { Student } from '../../../student';
import { StudentsService } from '../../../students.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder ,
     private studentservice : StudentsService ,
     private location: Location,
     private router:Router){
  }
  
  addForm !: FormGroup  ;

  
  ngOnInit(){
    this.addForm = this.formBuilder.group({
      Nom:['',Validators.required],
      Prenom:['',Validators.required],
      Niveau:['',Validators.required],
      Numero_Net:['',Validators.required]
    })
  }

  onSubmit(){
    alert("Ajout Avec Succes");
    // this.router.navigate(['admin/view'])
    this.studentservice.createStudent(this.addForm.value)
    .subscribe((data)=>{
      this.router.navigate(['view'])
    })
  }
  
}
