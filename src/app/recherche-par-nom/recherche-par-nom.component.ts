import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Oeuvre } from '../model/oeuvre.model';
import { OeuvreService } from '../services/oeuvre.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {

  oeuvres!: Oeuvre[];
  allOeuvres!: Oeuvre[];
  searchTerm: string = '';

  constructor(private oeuvreService: OeuvreService) {}

  ngOnInit(): void {
    this.allOeuvres = this.oeuvreService.listeOeuvres();
    this.oeuvres = this.allOeuvres;
  }

  // Méthode KeyUp (filtrage direct dans le tableau)
  onKeyUp(filterText: string): void {
    this.oeuvres = this.allOeuvres.filter(item =>
      item.titreOeuvre?.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}