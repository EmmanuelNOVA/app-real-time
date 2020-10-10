import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main/main-top-bar-menu.service';

declare var App: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private menuSvc: MainTopBarMenuService){

	}

	title = 'app-real-time';
	miEmpresa: string = 'Grupo Flecha Amarilla';
	periodo: number = 2020;

	menuItems:any[] = [];

	ngOnInit() {
		//Load Sidebar
		App.init();
		//Load Data
		this.getData();
	}

	getData(){
		this.menuSvc.getItemsMenu().subscribe((data: any)=>{
			//Async
			this.menuItems = data;
		});
	}


}
