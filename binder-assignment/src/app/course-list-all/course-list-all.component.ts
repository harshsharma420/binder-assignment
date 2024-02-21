import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-course-list-all',
  templateUrl: './course-list-all.component.html',
  styleUrls: ['./course-list-all.component.scss'],
})
export class CourseListAllComponent implements OnInit {
  //define object to hold all data
  courseDetialsAll: any= [];
  constructor(public coursesService: CoursesService) { }

  ngOnInit() {
    this.getAllCourses();
  }
  ionViewWillEnter() {
    this.getAllCourses();
  }

  //function to get all the available courses
  getAllCourses() {
    //susbscription to a service to get the data
    this.coursesService.getAllCourses().subscribe({
      next: data => {
        console.log(data);
        this.courseDetialsAll = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {

      }
    });
  }

}
