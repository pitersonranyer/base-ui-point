import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PixComponent } from './pix/pix.component';


const routes: Routes = [
  {
    path: '',
    component: PixComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PixRoutingModule {}
