import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PathComponent} from '../path/path.component';
import {PathLevel1Component} from '../path/levels/level1/pathLevel1.component';

import {HomeComponent} from '../home/home.component';

import {EventsComponent} from '../events/events.component';
import {CoursesComponent} from '../courses/courses.component';


@NgModule({
    imports:[
        RouterModule.forRoot([
            { path: 'level1', component: PathLevel1Component },
            { path: 'events', component: EventsComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'path', component: PathComponent },
            { path: '', component: HomeComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ])
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}