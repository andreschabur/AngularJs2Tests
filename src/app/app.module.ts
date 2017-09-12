import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here-->
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';



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
        AppRoutingModule
        /*RouterModule.forRoot([
            {
            path: 'heroes',
            component: HeroesComponent
            },
            {
            path: 'dashboard',
            component: DashboardComponent
            },            
            {
            path: '',
            redirecTo: '/dashboard',
            pathMatch: 'full'
            },
            {
              path: 'detail/:codigo',
              component: HeroDetailComponent
            }
        ])*/
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }


