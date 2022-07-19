import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPostComponent} from "./components/list-post/list-post.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";

const routes: Routes = [
  {
    path: '',
    component: ListPostComponent
  },
  {
    path: 'post/create',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
