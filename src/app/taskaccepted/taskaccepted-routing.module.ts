import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAcceptedComponent } from './taskaccepted.component';

const routes: Routes = [
  {
    path: '',
    component: TaskAcceptedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskAcceptedRoutingModule {}
