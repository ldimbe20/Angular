
import { Component } from '@angular/core';

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

    // logic for calling an http service
}