import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";

const routes: Routes = [
  {path:'',redirectTo:'courses',pathMatch:'full'},
  {path:'courses',loadChildren:() => import('./courses/courses.module').then(C => C.CoursesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
