import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { HomeComponent } from './components/home/home.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { DateComponent } from './components/date/date.component';
import { DatePipe } from '@angular/common'; 
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';

registerLocaleData(localeFr, 'fr-FR');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EtudiantComponent,
    HomeComponent,
    SpecialiteComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent,
    DateComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [DatePipe], 
  bootstrap: [AppComponent]
})
export class AppModule { }