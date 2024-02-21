import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(public http:HttpClient) { }

  getAllCourses()
  {
    return this.http.get('http://localhost:8100/assets/data/data.json');
  }
}
