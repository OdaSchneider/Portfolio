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
      description: 'JavaScript - based object-oriented 2D jump and run game',
      category: 'javascript',
      link: 'https://oda-schneider-el-pollo-loco.web.app/',
      img: 'polloLoco.jpg',
      video: 'polloLoco.mp4',
      playVideo: false
    },
    {
      name: 'Pokedex',
      description: 'Famous poke-lexicon created with PokeAPI',
      category: 'javascript',
      link: 'https://oda-schneider-pokedex.web.app/',
      img: 'pokedex.png'
    },
    // {
    //   name: 'JOIN',
    //   description: 'Kanban-Board created in group work',
    //   category: 'javascript',
    //   link: 'https://oda-schneider.com/Join/index.html',
    //   img: 'join.jpg'
    // },
    {
      name: 'Slack-Clone',
      description: 'Angular-based messaging service modelled on Slack',
      category: 'angular',
      link: 'https://slack-clone-5c2d6.web.app/',
      img: 'slack.jpg',
      video: 'slack.mp4',
      playVideo: false
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


  playVideo(i){
    this.projects[i].playVideo = true;
  }


  stopVideo(i){
    this.projects[i].playVideo = false;
  }

}
