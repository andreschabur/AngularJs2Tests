import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{

    private heroesUrl = 'api/heroes'; //URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}
    
    getHeroes(): Promise<Hero[]> {
        //return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }; //stub
    
    getHeroesSlowly(): Promise<Hero[]> {
        //Simular latencia con dos segundos de demora
        return new Promise(resolve => {setTimeout(() => resolve(this.getHeroes()), 2000);});
    }; //stub

    getHero(id: number): Promise<Hero>{
        //console.log('id es '+id);
        const url = '${this.heroesUrl}/${id}';
        //console.log('El url es: '+url);
        //return this.getHeroes().then(heroes => heroes.find(hero => hero.codigo === id));
        //return this.http.get(url)        
        //const consulte = this.http.get('api/heroes/'+id).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
        //console.log('1 * '+consulte);        
        //return this.http.get('api/heroes/'+id)
        //return this.http.get(url)
        return this.http.get(this.heroesUrl+'/'+id)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error ha ocurrido! po dio', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    update(hero: Hero): Promise<Hero> {
        //const url = '${this.heroesUrl}/${hero.id}';
        const url = this.heroesUrl+'/'+hero.codigo;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(nombre: string): Promise<Hero> {
        return this.http
        .post(this.heroesUrl, JSON.stringify({nombre: nombre}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        //const url = '#{this.heroesUrl}/#{id}';
        const url = this.heroesUrl+'/'+id;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}