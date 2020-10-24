import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main/main-top-bar-menu.service';
import { MainSideBarMenuService } from './services/core/main/main-side-bar-menu.service';

declare var App: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private menuSvc: MainTopBarMenuService, private menuSideBarSvc: MainSideBarMenuService ){

	}

	title = 'app-real-time';
	miEmpresa: string = 'Grupo Flecha Amarilla';
	periodo: number = 2020;

	menuItems:any[] = [];
	menuSideBarItems:any[] = [];

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

		this.menuSideBarSvc.getItemsSideBarMenu().subscribe((data: any)=>{
			this.menuSideBarItems = data;
		})
	}

	listenChildMenuEvent(eventArgs:any){
		console.log('Los datos emitidos por el componente hijo son :',eventArgs);
		console.log('El indice seleccionado en el padre es ', eventArgs.index);
		console.log('El item seleccionado en el padre es: ',eventArgs.name);
	}

	listenChildSideBarEvent(eventArgs:any){
		console.log('Los datos emitidos por el componente hijo son :',eventArgs);
		console.log('El indice seleccionado en el padre es ', eventArgs.index);
		console.log('El item seleccionado en el padre es: ',eventArgs.name);
	}


}
