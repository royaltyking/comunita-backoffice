import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './controllers/menu';
import { ArticlesComponent } from './controllers/articles';
import { ArticlesEComponent } from './controllers/articlesE';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticlesComponent,
    ArticlesEComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    IgxDatePickerModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  /*schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
