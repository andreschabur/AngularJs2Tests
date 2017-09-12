import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [],
})

export class HeroesComponent implements OnInit {
    
    herox : Hero = {
	codigo: 1,
	nombre: 'Tormeta de viento'
	};
    heroes : Hero[];
    selectedHero: Hero;
   
    constructor( private router: Router,
                    private heroService: HeroService) { }

    getHeroes(): void {
      //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.codigo]);
    }
}