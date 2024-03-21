import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
