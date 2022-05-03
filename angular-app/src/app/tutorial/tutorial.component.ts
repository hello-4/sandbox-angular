import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  // constructor(private messageService: MessageService) { }
  constructor() { }

  title = "tutorial"
  ngOnInit(): void {
  }

}
