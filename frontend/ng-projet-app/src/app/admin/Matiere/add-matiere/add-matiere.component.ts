import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatiereService } from '../matiere.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.css']
})
export class AddMatiereComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder ,
     private matiereService : MatiereService ,
     private router:Router){
  }
  
  addForm !: FormGroup  ;

  ngOnInit(){
    this.addForm = this.formBuilder.group({
      Codemat:['',Validators.required],
      Libelle:['',Validators.required],
      Coef:['',Validators.required]
    })
  }

  onSubmit(){
    
      // this.router.navigate(['admin/viewM'])
    this.matiereService.createMatiere(this.addForm.value)
    .subscribe((data: any)=>{
      // this.router.navigate(['view'])
    })
  }
}
