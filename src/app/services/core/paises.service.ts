import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const ENDPOINT = "https://restcountries.eu/rest/v2/";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }
    /**
     * 
     * @param region : Africa, Americas, Asia, Europe, Oceania
     * 
     */
  getPaisesByRegion(region: string){
    return this.http.get(`${ENDPOINT}region/${region}`);
  }

  getPaisesByName(name: string){
    return this.http.get(`${ENDPOINT}name/${name}`);
  }
  /**
   * Get all Countries
   */
  getAllPaises(){
    return this.http.get(`${ENDPOINT}all`);
  }


  

}
