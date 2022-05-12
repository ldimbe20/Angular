import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.services';

@Component({
  selector: 'authors',
  template: `
  <h2>{{ "Title:" + title }}</h2>
  <ul>
      <li *ngFor="let author of authors">
          {{authors}}
       </li>
  </ul>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title="List of Authors"
  authors;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
   }

  ngOnInit(): void {
  }

}
