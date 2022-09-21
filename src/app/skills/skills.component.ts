import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: any = [
    {
      name: 'JavaScript / TypeScript',
      img: 'javascript.png'
    },
    {
      name: 'Angular',
      img: 'angular.png'
    }, {
      name: 'HTML',
      img: 'html.png'
    },
    {
      name: 'CSS / SCSS',
      img: 'css.png'
    },
    {
      name: 'Git',
      img: 'git.png'
    },
    {
      name: 'Rest-API',
      img: 'api.png'
    }, {
      name: 'SCRUM',
      img: 'scrum.png'
    },
    {
      name: 'Firebase (Database)',
      img: 'firebase.png'
    }
  ];
}
