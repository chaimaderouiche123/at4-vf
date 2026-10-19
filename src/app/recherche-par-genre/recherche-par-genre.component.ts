import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Oeuvre } from '../model/oeuvre.model';
import { Genre } from '../model/genre.model';
import { OeuvreService } from '../services/oeuvre.service';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-genre.component.html'
})
export class RechercheParGenreComponent implements OnInit {

  oeuvres!: Oeuvre[];
  idGenre!: number;
  genres!: Genre[];

  constructor(private oeuvreService: OeuvreService) {}

  ngOnInit(): void {
    this.genres = this.oeuvreService.listeGenres();
    this.oeuvres = this.oeuvreService.listeOeuvres();
  }

  onChange(): void {
    if (this.idGenre) {
      this.oeuvres = this.oeuvreService.rechercherParGenre(this.idGenre);
    } else {
      this.oeuvres = this.oeuvreService.listeOeuvres();
    }
  }
}
