import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/index.php'; // Remplacez par l'URL de votre API PHP
  private materiel = 'http://localhost:8000/matiere/index.php';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getMateriel(): Observable<any> {
    return this.http.get<any>(this.materiel);
  }
}