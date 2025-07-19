import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.scss'
})
export class Note implements OnInit {

  noteId!: string |null;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => 
          {this.noteId = params.get('id')})
  }


}
