import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectsComponent} from './projects/projects.component';
import {ProjectsHomeComponent} from './projects/projects-home/projects-home.component';
import {ProjectsItemComponent} from './projects/projects-item/projects-item.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            { path: '', component: ProjectsHomeComponent },
            { path: 'project/:id', component: ProjectsItemComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
