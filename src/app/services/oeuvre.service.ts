import { Injectable } from '@angular/core';
import { Oeuvre } from '../model/oeuvre.model';
import { Genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  oeuvres: Oeuvre[];
  genres: Genre[];

  constructor() {
    this.genres = [
      { idGenre: 1, nomGenre: "Peinture" },
      { idGenre: 2, nomGenre: "Sculpture" },
      { idGenre: 3, nomGenre: "piece de theatre" },
      { idGenre: 4, nomGenre: "poeme" },
      { idGenre: 5, nomGenre: "film" }

    ];

    this.oeuvres = [
      { idOeuvre: 1, titreOeuvre: "La Joconde", prixOeuvre: 850000000, dateCreation: new Date("01/14/1503"), genre: { idGenre: 1, nomGenre: "Peinture" } },
      { idOeuvre: 2, titreOeuvre: "La Nuit Étoilée", prixOeuvre: 100000000, dateCreation: new Date("06/01/1889"), genre: { idGenre: 1, nomGenre: "Peinture" } },
      { idOeuvre: 3, titreOeuvre: "Le Penseur", prixOeuvre: 28000000, dateCreation: new Date("01/01/1904"), genre: { idGenre: 2, nomGenre: "Sculpture" } }
    ];
  }

  listeOeuvres(): Oeuvre[] {
    return this.oeuvres;
  }

  ajouterOeuvre(o: Oeuvre) {
    this.oeuvres.push(o);
  }

  supprimerOeuvre(prod: Oeuvre) {
    const index = this.oeuvres.indexOf(prod, 0);
    if (index > -1) {
      this.oeuvres.splice(index, 1);
    }
  }

  consulterOeuvre(id: number): Oeuvre {
    return this.oeuvres.find(p => p.idOeuvre == id)!;
  }

  updateOeuvre(o: Oeuvre) {
    const index = this.oeuvres.findIndex(p => p.idOeuvre == o.idOeuvre);
    if (index > -1) {
      this.oeuvres[index] = o;
    }
  }

  listeGenres(): Genre[] {
    return this.genres;
  }

  consulterGenre(id: number): Genre {
    return this.genres.find(cat => cat.idGenre == id)!;
  }

  rechercherParGenre(idGenre: number): Oeuvre[] {
    return this.oeuvres.filter(o => o.genre && o.genre.idGenre == idGenre);
  }
}