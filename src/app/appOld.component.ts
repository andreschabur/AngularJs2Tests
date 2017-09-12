import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'appOld-root',
    templateUrl: './app.component.html',       
    styleUrls: ['./app.component.css'],
    providers: [],
})

export class AppComponentOld implements OnInit {    
    heroes : Hero[];
    selectedHero: Hero;
   
    constructor(private heroService: HeroService) { }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }


    getHeroes(): void {      
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);      
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}