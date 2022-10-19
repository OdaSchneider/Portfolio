import { Component, OnInit } from '@angular/core';

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
