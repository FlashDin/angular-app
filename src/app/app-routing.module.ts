import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostCreateComponent} from "./components/post-create/post-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/create', component: PostCreateComponent},
  {path: 'posts/create/:id', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
