import { Component, OnInit } from '@angular/core';
import { ApiService } from './apiService.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-projet-app';
  data: any;
  materiel: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      
    }, (error) => {
      console.error(error);
    });

    this.apiService.getMateriel().subscribe((data) => {
      this.materiel = data;
      console.log(this.materiel);
      
    }, (error) => {
      console.error(error);
    });

  }
  
}


