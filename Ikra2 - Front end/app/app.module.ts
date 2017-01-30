import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PathComponent} from './path/path.component';
import {PathLevel1Component} from './path/levels/level1/pathLevel1.component';

import {EventsComponent} from './events/events.component';
import {CoursesComponent} from './courses/courses.component';
import { AppComponent }  from './app.component';

import {HttpModule} from '@angular/http';
import {Http} from '@angular/http';

import {TranslateLoader} from 'ng2-translate';
import {TranslateStaticLoader} from 'ng2-translate';
import {TranslateModule} from 'ng2-translate';


import { MdlModule } from 'angular2-mdl';

import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    MdlModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'app/assets/translate', '.json'),
            deps: [Http]
        }),
        AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    PathComponent,
    CoursesComponent,
    EventsComponent,
    PathLevel1Component,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
