import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { AboutComponent } from './nextpage/about/about.component';
import { AndroidComponent } from './nextpage/android/android.component';
import { AngularComponent } from './nextpage/angular/angular.component';
import { AwsComponent } from './nextpage/aws/aws.component';
import { ContactComponent } from './nextpage/contact/contact.component';
import { HomepageComponent } from './nextpage/homepage/homepage.component';
import { JavaComponent } from './nextpage/java/java.component';
import { MachinelearningComponent } from './nextpage/machinelearning/machinelearning.component';
import { MatlabComponent } from './nextpage/matlab/matlab.component';
import { MenuComponent } from './nextpage/menu/menu.component';
import { NodeComponent } from './nextpage/node/node.component';
import { PythonComponent } from './nextpage/python/python.component';
import { ReactComponent } from './nextpage/react/react.component';
import { SoftwaretestingComponent } from './nextpage/softwaretesting/softwaretesting.component';
import { SqlComponent } from './nextpage/sql/sql.component';
import { WebdevelopmentComponent } from './nextpage/webdevelopment/webdevelopment.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'webdevelopment',component:WebdevelopmentComponent},
  {path:'react',component:ReactComponent},
  {path:'android',component:AndroidComponent},
  {path:'angular',component:AngularComponent},
  {path:'aws',component:AwsComponent},
  {path:'java',component:JavaComponent},
  {path:'machinelearning',component:MachinelearningComponent},
  {path:'node',component:NodeComponent},
  {path:'python',component:PythonComponent},
  {path:'softwaretesting',component:SoftwaretestingComponent},
  {path:'sql',component:SqlComponent},
  {path:'matlab',component:MatlabComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
