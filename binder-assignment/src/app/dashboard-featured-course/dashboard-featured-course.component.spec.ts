import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardFeaturedCourseComponent } from './dashboard-featured-course.component';

describe('DashboardFeaturedCourseComponent', () => {
  let component: DashboardFeaturedCourseComponent;
  let fixture: ComponentFixture<DashboardFeaturedCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFeaturedCourseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardFeaturedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
