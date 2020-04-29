import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { HeaderComponent } from '../header/header.component';
import { BookCatalogComponent } from '../book-catalog/book-catalog.component';
import { BookService } from '../../../app/services/book.service';
import { BookCreateComponent } from '../book-create/book-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPage, 
    HeaderComponent, 
    BookCatalogComponent,
    BookCreateComponent
  ],
  providers: [BookService],
  entryComponents: [BookCreateComponent]
})
export class MainPageModule {}
