import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService{
    
    constructor(private http: Http) {}

    search(term: string): Observable<Hero[]> {
        //const urlBusqueda = ''api/heroes/?nombre=${term}'';
        const urlBusqueda = 'api/heroes/?nombre='+term;
        console.log('***************** ejcuto el heroSearchService.search()');
        return this.http
        .get(urlBusqueda)
        .map(response => response.json().data as Hero[]);
    }
}
