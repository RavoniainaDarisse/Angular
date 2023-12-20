import { Component,OnInit } from '@angular/core';
import { MatiereService } from '../matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-matiers',
  templateUrl: './liste-matiers.component.html',
  styleUrls: ['./liste-matiers.component.css']
})
export class ListeMatiersComponent implements OnInit {
  matiere: any;
  searchValue: any;

  constructor(private matiereService : MatiereService ,
    private router:Router){}

  ngOnInit() {
    this.matiereService.getMatiere()
    .subscribe((data: any)=>{
      this.matiere = data;
      console.log(this.matiere);

    })
  }

}
