import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListempComponent } from './listemp/listemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { FormComponent } from './form/form.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';


const routes: Routes = [

  
  { path: 'listemp', component: ListempComponent },  
  { path: 'addemp', component: AddempComponent } ,
  {path :'employeeadd', component :EmployeeaddComponent} ,
  {path:'showemployee' ,component:ShowemployeeComponent},
  {path: '', component: FormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


