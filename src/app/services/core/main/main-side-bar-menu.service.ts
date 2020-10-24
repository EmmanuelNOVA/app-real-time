import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'assets/json/sideBar.json'

@Injectable({
  providedIn: 'root'
})
export class MainSideBarMenuService {

  constructor(private http: HttpClient) { }

	getItemsSideBarMenu() {
		return this.http.get(endPoint);
	}
}
