import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSearchPipeModule } from 'ngx-search-2-pipe';
import { NavComponent } from './admin/Student/nav/nav.component';
import { ViewEtudiantComponent } from './admin/Student/view-etudiant/view-etudiant.component';
import { AddEtudiantComponent } from './admin/Student/add-etudiant/add-etudiant.component';
import { EditeEtudiantComponent } from './admin/Student/edite-etudiant/edite-etudiant.component';
import { EditeMatiereComponent } from './admin/Matiere/edite-matiere/edite-matiere.component';
import { DeleteMatiereComponent } from './admin/Matiere/delete-matiere/delete-matiere.component';
import { ListMatiereComponent } from './admin/Matiere/list-matiere/list-matiere.component';
import { AddMatiereComponent } from './admin/Matiere/add-matiere/add-matiere.component';
import { InsertNotesComponent } from './admin/Notes/insert-notes/insert-notes.component';
import { ListEtudComponent } from './admin/Notes/list-etud/list-etud.component';
import { DetailsComponent } from './admin/Notes/details/details.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { Block1Component } from './home/block1/block1.component';
import { Block2Component } from './home/block2/block2.component';
import { Block3Component } from './home/block3/block3.component';
import { Block4Component } from './home/block4/block4.component';
import { Block5Component } from './home/block5/block5.component';
import { ListeEtudiantComponent } from './admin/Student/liste-etudiant/liste-etudiant.component';
import { ListeMatiersComponent } from './admin/Matiere/liste-matiers/liste-matiers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewEtudiantComponent,
    AddEtudiantComponent,
    EditeEtudiantComponent,
    EditeMatiereComponent,
    DeleteMatiereComponent,
    ListMatiereComponent,
    AddMatiereComponent,
    InsertNotesComponent,
    ListEtudComponent,
    DetailsComponent,
    HomeComponent,
    AdminComponent,
    Block1Component,
    Block2Component,
    Block3Component,
    Block4Component,
    Block5Component,
    ListeEtudiantComponent,
    ListeMatiersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    NgxSearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
