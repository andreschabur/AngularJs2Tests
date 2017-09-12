import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
    
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }; //stub
    
    getHeroesSlowly(): Promise<Hero[]> {
        //Simular latencia con dos segundos de demora
        return new Promise(resolve => {setTimeout(() => resolve(this.getHeroes()), 2000);});
    }; //stub

    getHero(codigo: number): Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.codigo === codigo));
    }
}