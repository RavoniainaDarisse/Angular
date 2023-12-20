import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  private apiUrlSN = 'http://localhost:8000/notes/details.php';
  
  constructor(private http : HttpClient) { }

  getNotes(){
    return this.http.get<any>(this.apiUrlSN);
  }
  createNote(note : Note){
    return this.http.post('http://localhost:8000/notes/insert.php', note)
  }
}
