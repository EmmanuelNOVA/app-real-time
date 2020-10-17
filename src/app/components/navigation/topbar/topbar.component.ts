import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'navigation-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

	//Declaration Variables
	@Input() menuProfileItems: any[] = [];
	@Output() onClickMenu: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {

	}

	onclick_menu(index: number, item: any) {
		this.onClickMenu.emit({
			index,
			name: item.title
		});
	}

}
