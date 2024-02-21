import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseListAllComponent } from './course-list-all/course-list-all.component';
import { DashboardFeaturedCourseComponent } from './dashboard-featured-course/dashboard-featured-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TopNavComponent, DashboardComponent, CourseListAllComponent, DashboardFeaturedCourseComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
