import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './controllers/articles';
import { ArticlesEComponent } from './controllers/articlesE';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles-e', component: ArticlesEComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
