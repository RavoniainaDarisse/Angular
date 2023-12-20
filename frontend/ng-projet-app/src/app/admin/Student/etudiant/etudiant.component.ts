import { Component , OnInit} from '@angular/core';
import { ApiService } from '../../../apiService.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  data: any;
  searchValue: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      
    }, (error) => {
      console.error(error);
    });
  }
  selectEtud(dataId: string){
    const Id = +dataId;
    this.data = Id;
  }
}