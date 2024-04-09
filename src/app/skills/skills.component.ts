import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any = [
    {
      name: 'JavaScript',
      img: 'javascript.png'
    },
    {
      name: 'HTML',
      img: 'html.png'
    },
    {
      name: 'CSS / SCSS',
      img: 'css.png'
    },
    {
      name: 'Angular',
      img: 'angular.png'
    }, 
    {
      name: 'Typescript',
      img: 'typescript.png'
    }, 
    {
      name: 'RxJS',
      img: 'rxjs.png'
    }, 
    {
      name: 'Jest',
      img: 'jest.png'
    }, 
    {
      name: 'Cypress',
      img: 'cypress.png'
    }, 
    {
      name: 'Playwright',
      img: 'playwright.png'
    }, 
    {
      name: 'Git',
      img: 'git.png'
    },
    {
      name: 'Rest-API',
      img: 'api.png'
    }, 
    {
      name: 'SCRUM',
      img: 'scrum.png'
    },
    {
      name: 'Firebase',
      img: 'firebase.png'
    }
  ];
}
