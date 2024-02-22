import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-course-list-all',
  templateUrl: './course-list-all.component.html',
  styleUrls: ['./course-list-all.component.scss'],
})
export class CourseListAllComponent implements OnInit {
  //define object to hold all data
  courseDetialsAll: any = [];
  private subscription: Subscription | any;
  @Input()
  searchTerm = "";
  constructor(public coursesService: CoursesService) { }
  ngOnChanges() {
    console.log(this.searchTerm);
  }
  ngOnInit() {
    this.getAllCourses();
  }
  ionViewWillEnter() {
    this.getAllCourses();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'View Cart',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];
  //function to get all the available courses
  getAllCourses() {
    //susbscription to a service to get the data
    this.subscription = this.coursesService.getAllCourses().subscribe({
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



  calculateDiscountedPrice(actualPrice: any, discountPercentage: any): number {
    const actualPriceNumeric = parseFloat(actualPrice.replace(/[^\d.-]/g, ''));
    const discountPercentageNumeric = parseFloat(discountPercentage.replace(/[^\d.]/g, '')) / 100;
    const priceInDecimals = actualPriceNumeric * (1 - discountPercentageNumeric);
    //Round it to whole number
    return Math.round(priceInDecimals);
  }

}
