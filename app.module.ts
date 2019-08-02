import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";  
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListempComponent } from './listemp/listemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmployeeService } from './employee.service';
import { FormComponent } from './form/form.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { MyMobileService } from './my-mobile.service';
import { OrderByPipe } from './order-by.pipe';
import { SideByPipe } from './side-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListempComponent,
    AddempComponent,
    FormComponent,
    EmployeeaddComponent,
    ShowemployeeComponent,
    OrderByPipe,
    SideByPipe,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [EmployeeService,MyMobileService],
  bootstrap: [AppComponent]

})
export class AppModule {}