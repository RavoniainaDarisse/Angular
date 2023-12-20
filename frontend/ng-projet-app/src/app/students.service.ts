import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiUrlS = 'http://localhost:8000/index.php';

  constructor(private http : HttpClient) { }

  getStudents(){
    return this.http.get<any>(this.apiUrlS);
  }
  deletStudents(id :number){
    return this.http.delete<Student[]>('http://localhost:8000/delete.php?id='+id)
  }
  createStudent(student : Student){
    return this.http.post('http://localhost:8000/insert.php', student)
  }
  getStudentById(id: number) {
    return this.http.get('http://localhost:8000/update.php?id=' + id);
  }
  updateStudent(id: number, student: Student) {
    return this.http.put('http://localhost:8000/update.php/?id=' + id, student);
  }
}
