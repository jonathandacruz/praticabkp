import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosePadComponent } from './closedPad.component';

const routes: Routes = [
  {
    path: '',
    component: ClosePadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosePadRoutingModule {}
