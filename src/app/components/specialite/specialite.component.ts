import { Component, OnInit } from '@angular/core';
import { ISpecialite } from '../../models/ispecialite';
import { Specialite } from '../../models/specialite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  specialite: ISpecialite[] = [
    {_libelle: "DEV APP", _idSpec: 1},
{_libelle: "ING RESEAUX", _idSpec: 2},
{_libelle: "INTEGRATEUR", _idSpec: 3},
{_libelle: "CHEF DE PROJET", _idSpec: 4},
{_libelle: "INFOGRAPHISTE", _idSpec: 5},
{_libelle: "UX DESIGNER", _idSpec: 6},
{_libelle: "DEVELOPPEUR MOBILE", _idSpec: 7}
,];


  spe: ISpecialite[] = [];

  ngOnInit(): void {
    this.spe = this.specialite; 
  }
}