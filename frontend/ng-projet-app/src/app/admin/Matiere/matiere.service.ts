import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Matiere } from './matiere';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrlS = 'http://localhost:8000/matiere/index.php';

  constructor(private http : HttpClient) { }

  getMatiere(){
    return this.http.get<any>(this.apiUrlS);
  }
  createMatiere(matiere:Matiere){
    return this.http.post('http://localhost:8000/matiere/insert.php', matiere)
  }
  deletMatiere(id :number){
    console.log(id);
    return this.http.delete<Matiere[]>('http://localhost:8000/matiere/delete.php?id='+id)
  }
  getMatieres(id :number){
    console.log(id);
    return this.http.delete<Matiere[]>('http://localhost:8000/note/details.php?id='+id)
  }
}
