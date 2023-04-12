import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './newpage/navbar/navbar.component';
import { FooterComponent } from './newpage/footer/footer.component';
import { HomepageComponent } from './nextpage/homepage/homepage.component';
import { MenuComponent } from './nextpage/menu/menu.component';
import { AboutComponent } from './nextpage/about/about.component';
import { ContactComponent } from './nextpage/contact/contact.component';
import { WebdevelopmentComponent } from './nextpage/webdevelopment/webdevelopment.component';
import { ReactComponent } from './nextpage/react/react.component';
import { JavaComponent } from './nextpage/java/java.component';
import { PythonComponent } from './nextpage/python/python.component';
import { AngularComponent } from './nextpage/angular/angular.component';
import { NodeComponent } from './nextpage/node/node.component';
import { AwsComponent } from './nextpage/aws/aws.component';
import { MatlabComponent } from './nextpage/matlab/matlab.component';
import { SoftwaretestingComponent } from './nextpage/softwaretesting/softwaretesting.component';
import { SqlComponent } from './nextpage/sql/sql.component';
import { AndroidComponent } from './nextpage/android/android.component';
import { MachinelearningComponent } from './nextpage/machinelearning/machinelearning.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    WebdevelopmentComponent,
    ReactComponent,
    JavaComponent,
    PythonComponent,
    AngularComponent,
    NodeComponent,
    AwsComponent,
    MatlabComponent,
    SoftwaretestingComponent,
    SqlComponent,
    AndroidComponent,
    MachinelearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
