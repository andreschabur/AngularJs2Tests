import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
template: '<ul class="heroes">'+
'<li *ngFor="let hero of heroes"'+
  '[class.selected]="hero === selectedHero"'+
  '(click)="onSelect(hero)">'+
  '<span class="badge">{{hero.codigo}}</span> {{hero.nombre}}'+
'</li>'+
'</ul>'+
'<hero-detail [hero] = "selectedHero"><hero-detail>',
 styleUrls: ['./app.component.css'],
  providers: [],
})

export class HeroesComponent implements OnInit {
    
  herox : Hero = {
	codigo: 1,
	nombre: 'Tormeta de viento'
	};
  heroes : Hero[];
  selectedHero: Hero;
   
constructor(private heroService: HeroService) { }

	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}


    getHeroes(): void {
      //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}


/*
Se pasa para mock-heroes.ts
const HEROES: Hero[] = [
  { codigo: 11, nombre: 'Mr. Nice' },
  { codigo: 12, nombre: 'Narco' },
  { codigo: 13, nombre: 'Bombasto' },
  { codigo: 14, nombre: 'Celeritas' },
  { codigo: 15, nombre: 'Magneta' },
  { codigo: 16, nombre: 'RubberMan' },
  { codigo: 17, nombre: 'Dynama' },
  { codigo: 18, nombre: 'Dr IQ' },
  { codigo: 19, nombre: 'Magma' },
  { codigo: 20, nombre: 'Tornado' }
];


*/