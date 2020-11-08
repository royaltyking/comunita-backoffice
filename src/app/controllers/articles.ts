import { Component } from '@angular/core';
import { MenuComponent } from './menu';
import { IgxDatePickerModule } from 'igniteui-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'articles',
  templateUrl: '../views/articles.html',
  styleUrls: ['../views/articles.scss']
})
export class ArticlesComponent {
  title = 'articles';

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];

  columns = [
    { prop: 'name' }, 
    { name: 'Gender' }, 
    { name: 'Company' }
  ];
}
