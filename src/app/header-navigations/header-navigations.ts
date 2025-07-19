import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-navigations',
  imports: [
    RouterModule
  ],
  templateUrl: './header-navigations.html',
  styleUrl: './header-navigations.scss'
})
export class HeaderNavigations {

  constructor(private router: Router){

  }

  navigateToNotes(){
    this.router.navigate(['/notes']);
  }

  navigateToNoteById(id:number){
    this.router.navigate(['/note',id]);
  }

}
