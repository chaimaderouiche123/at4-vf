import { Routes } from '@angular/router';
import { OeuvresComponent } from './oeuvres/oeuvres.component';
import { AddOeuvreComponent } from './add-oeuvre/add-oeuvre.component';
import { UpdateOeuvreComponent } from './update-oeuvre/update-oeuvre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
  { path: "oeuvres", component: OeuvresComponent },
  { path: "addOeuvre", component: AddOeuvreComponent },
  { path: "updateOeuvre/:id", component: UpdateOeuvreComponent },
  { path: "rechercheParGenre", component: RechercheParGenreComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent },
  { path: "", redirectTo: "oeuvres", pathMatch: "full" }
];