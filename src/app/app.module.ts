import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here-->

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
        BrowserModule,
	FormsModule,
        RouterModule.forRoot([
            {
            path: 'heroes',
            component: HeroesComponent
            },
            {
            path: 'dashboard',
            component: DashboardComponent
            },            
        ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }


