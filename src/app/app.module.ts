import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentModule } from '../app/student/student.module';
import { RouterModule } from '@angular/router';
import { StudentComponent } from '../app/student/student.component';
import { StudentListComponent } from '../app/student/student-list/student-list.component';
import { StudentDetailsComponent } from '../app/student/student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';
import { TeachersModule } from '../app/teachers/teachers.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { InputFormateDirective } from './directives/input-formate.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    InputFormateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StudentModule,
    TeachersModule,
    AdminModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'student-list', component: StudentListComponent },
      { path: 'student-details/:name/:age', component: StudentDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'home', component: HomeComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'admin', component: AdminComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
