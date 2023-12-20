import { Component,OnInit } from '@angular/core';
import { MatiereService } from '../matiere.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.css']
})
export class ListMatiereComponent implements OnInit {

  matiere: any;
  id: any;

  constructor(private matiereService : MatiereService ,
    private router:Router){}

  ngOnInit() {
    this.matiereService.getMatiere()
    .subscribe((data: any)=>{
      this.matiere = data;
      console.log(this.matiere);

    })
  }
  delete( matiere: any ): void{
    console.log(matiere.id_matiere);
    
    this.matiereService.deletMatiere(matiere.id_matiere)
    .subscribe((data)=>{
      this.matiere = this.matiere.filter((u: any) => u !== matiere);

    })
    
  }
  edit(students: any){
    this.id = students.id;
    
    this.router.navigate(['admin/editM/'+this.id])
  }
  details(){
    this.matiereService.getMatieres(this.matiere.id_matiere)
    .subscribe((data)=>{
      // this.matiere = this.matiere.filter((u: any) => u !== matiere);

    })
  }
}
