
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', 
    // anywhere we have the above element angular will add the courses component
template: `
<h2>{{ "Title:" + title }}</h2>
<ul>
    <li *ngFor="let course of courses">
        {{course}}
     </li>
</ul>
`
    // look up directives
    // html markup we want to be rendered for this component
})
export class CoursesComponent {
    title= "List of Courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    // contructor is where we initialize an object
}