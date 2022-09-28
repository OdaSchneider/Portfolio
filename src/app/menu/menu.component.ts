import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() darkMode = true;
  open: boolean = false;

  openMenu() {
    if(!this.open){
      this.open = true;
    }else{
      this.open = false;
    }

  }

  closeMenu(){
    this.open = false;
  }

}
