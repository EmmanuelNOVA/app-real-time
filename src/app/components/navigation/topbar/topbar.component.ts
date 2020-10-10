import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }
  //Declaration Variables
  @Input() menuItems:any[] = [];
  ngOnInit(): void {
    
  }

}
