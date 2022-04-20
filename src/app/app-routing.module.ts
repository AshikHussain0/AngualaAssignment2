import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    component:AppComponent,
    path:''
  },
  {
    component:EmployeeComponent,
    path:'employee'

  },
  {
    component:EmployeeListComponent,
    path:'employee-list'
  },
  {
    component:EmployeeComponent,
    path:'employee/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
