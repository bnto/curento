import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  // NOTE: to add some hooks, implement them on the class like this:
  // export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  /* app.component.html */

  // [course]="courses[i]"
  @Input()
  course: Course;

  // [cardIndex]="_i + 1"
  @Input()
  cardIndex: number;

  // (selectCourse)="handleCourseSelection($event)"
  @Output()
  selectCourse: EventEmitter<Course> = new EventEmitter();


  // Use @ContentChild decorator to access/query template
  // outside the component, for example: projected content,
  // the one that is used in the ng-template
  @ContentChild('courseImage')
  image: ElementRef;

  @ContentChildren('courseImage')
  images: QueryList<ElementRef>;

  // @ContentChildren query a collection of element that match the query

  /* course-card.component.html */

  // (click)="handleClick"
  handleClick() {
    this.selectCourse.emit(this.course)
    console.log('ContentChild ElementRef:', this.image)
    console.log('ContentChildern QueryList of ElementRefs', this.images)
  }

  // [ngClass]="cardClasses()"
  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }
  }

  // [NgStyle]="cardStyles()"
  cardStyles() {
    return { 'background-image': `url('${this.course.iconUrl}')` }
  }
}
