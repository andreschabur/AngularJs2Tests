import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    //template: '<h3>Mi Mesa de uso, Dashbord</h3>visualizando despues de dar cli en dbrd',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
heroes: Hero[] = [];

constructor(private heroService: HeroService){}

ngOnInit(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(2,6));
}

 }