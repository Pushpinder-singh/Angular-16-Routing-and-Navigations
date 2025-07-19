import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    RouterModule,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {

  noteId!: string |null;
title!: string;
  constructor(private activedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activedRoute.queryParams.subscribe((params)=>{
        this.noteId = params['noteId'],
        this.title = params['title'] 
      })
  }
}
