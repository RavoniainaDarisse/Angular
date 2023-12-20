import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEtudiantComponent } from './admin/Student/add-etudiant/add-etudiant.component';
import { ViewEtudiantComponent } from './admin/Student/view-etudiant/view-etudiant.component';
import { EditeEtudiantComponent } from './admin/Student/edite-etudiant/edite-etudiant.component';
import { AddMatiereComponent } from './admin/Matiere/add-matiere/add-matiere.component';
import { ListMatiereComponent } from './admin/Matiere/list-matiere/list-matiere.component';
import { EditeMatiereComponent } from './admin/Matiere/edite-matiere/edite-matiere.component';
import { InsertNotesComponent } from './admin/Notes/insert-notes/insert-notes.component';
import { ListEtudComponent } from './admin/Notes/list-etud/list-etud.component';
import { DetailsComponent } from './admin/Notes/details/details.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ListeEtudiantComponent } from './admin/Student/liste-etudiant/liste-etudiant.component';
import { ListeMatiersComponent } from './admin/Matiere/liste-matiers/liste-matiers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listeEtud', component: ListeEtudiantComponent },
  { path: 'listeMat', component: ListeMatiersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddEtudiantComponent },
  { path: '', component: ViewEtudiantComponent },
  { path: 'admin/view', component: ViewEtudiantComponent },
  { path: 'admin/edit/:id', component: EditeEtudiantComponent },
  { path: 'admin/addM', component: AddMatiereComponent },
  { path: 'admin/viewM', component: ListMatiereComponent },
  { path: 'admin/editM/?id=', component: EditeMatiereComponent },
  { path: 'admin/addN', component: InsertNotesComponent },
  { path: 'admin/viewN', component: ListEtudComponent },
  { path: 'admin/details', component: DetailsComponent },
  // { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
