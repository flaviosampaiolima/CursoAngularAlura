import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FiltroPorDescricao } from './filtro-por-descricao.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { CardComponent } from '../../shared/components/card/card.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FiltroPorDescricao,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule
    ]
})
export class PhotoListModule{}