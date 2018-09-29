import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './Photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './Photos/photo-form/photo-form.component';

const routes: Routes = [
    { path: 'user/flavio', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent }
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [RouterModule ]
})
export class AppRoutingModule {

}