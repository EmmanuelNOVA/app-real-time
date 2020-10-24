import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //Declaration Variables
  @Input() menuSideBarItems: any[] = [];
  @Input() titleMenu: string = "";
  @Input() mainIconMenu: string = "";
  @Input() subtitleMenu: string = "";
  @Output() onClickSiderBarMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclick_sidebar(item: any) {
    console.log("Menu seleccionado desde el hijo ",item);
		this.onClickSiderBarMenu.emit({
        index: item.id,
			  name: item.title
		});
  }
  

}
