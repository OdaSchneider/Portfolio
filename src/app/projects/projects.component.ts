import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  projects: any = [
    {
      name: 'El Pollo Loco',
      description: 'JavaScript - based 2D jump and run game',
      category: 'javascript',
      img: 'polloLoco.jpg'
    },
    {
      name: 'Pokedex',
      description: 'Famous poke-lexicon created with PokeAPI',
      category: 'javascript',
      link: 'https://oda-schneider.com/pokedex/index.html',
      img: 'pokedex.png'
    },
    {
      name: 'JOIN',
      description: 'Kanban-Board created in group work',
      category: 'javascript',
      img: 'join.jpg'
    },
    {
      name: 'Portfolio',
      description: 'Angular-based Personal webpage',
      category: 'angular',
      img: 'portfolio.jpg'
    }
  ];

  projectFilter = this.projects;


  categories: any = {
    all : true,
    angular : false,
    javascript : false
  };


  showProjects(category: string) {
    this.toggleButtons(category);
    if (category != 'all') {
      this.projectFilter = this.projects.filter((project: any) => project.category == category);
    } else {
      this.projectFilter = this.projects;
    }
    
  }

  toggleButtons(category: string) {
    for(let type in this.categories) {
      if(type.toString() == category) {
        this.categories[type] = true;
      } else {
        this.categories[type] = false;
      }
    }
  }

}
