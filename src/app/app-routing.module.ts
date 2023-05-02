import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupporthoursListComponent } from './supporthours-list/supporthours-list.component';
import { UsagesListComponent } from './usages-list/usages-list.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {path: '', redirectTo: 'request', pathMatch: 'full'},
  {path: 'request', component: RequestComponent},
  {path: 'supporthours/:year', component: SupporthoursListComponent},
  {path: 'usages/:year', component: UsagesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
