//import { Component } from '@angular/core';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
  /*template:
    '<div *ngIf="hero">'+
        '<h2>Detalles de {{hero.nombre}}!</h2>'+
	'<div><label>codigo: </label>{{hero.codigo}}</div>'+
	'<div>'+
	    '<label>nombre: </label>'+
	    '<input [(ngModel)]="hero.nombre" placeholder="nombre"/>'+
	'</div>'+
    '</div>'*/
    templateUrl: './hero-detail.component.html',
  
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params:ParamMap) => 
            this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }
}