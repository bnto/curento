import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startDate = new Date(2000, 0, 1)
  title = COURSES[0].description
  price = 9.99
  rate = 0.45

  // @ViewChild
  // Allow to get programmatic reference to any part of the template
  // like a native element (ElementRef) or a component
  @ViewChild('cardRef')
  card: CourseCardComponent

  @ViewChild('container', { read: ElementRef })
  containerDiv: ElementRef

  // @ViewChild only return first element found
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cardsRef: QueryList<ElementRef>

  // *ngFor=" let course of courses;"
  courses = COURSES

  // (selectCourse)="handleCourseSelection($event)"
  handleCourseSelection(course: Course) {
    console.log('App component selected', course)
    console.log('ViewChild component', this.card)
    console.log('ViewChild ElementRef', this.containerDiv)
    console.log('ViewChildren', this.cards)
    console.log('ViewChildren first', this.cards.first)
  }
  handleEditCoursesClick() {
    console.log('edited course')
    this.courses.push(
      {
        id: 1,
        description: "Edited",
        iconUrl: '',
        longDescription: "Edited",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    )
  }
  ngAfterViewInit() {
    // Observe ViewChildren
    this.cards.changes.subscribe(cards => console.log(cards))
    this.cardsRef.changes.subscribe(cards => console.log(cards))
  }
}
