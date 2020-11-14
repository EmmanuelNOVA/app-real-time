import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/services/core/paises.service';
import { SearchService } from 'src/app/services/core/search.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit,OnDestroy {

  //Variables Datos
  paisesList: any[] = [];
  subscription$: Subscription;

  defaultBindingsList = [
    { value : 0, label: 'Todos'},
    { value : 1, label: 'Africa'},
    { value : 2, label: 'Americas'},
    { value : 3, label: 'Asia'},
    { value : 4, label: 'Europe'},
    { value : 4, label: 'Oceania'}
  ];
  selectedRegion = null;
  constructor(private svcPaises: PaisesService, private svcSearch: SearchService) { 

    //get init data
    this.getAllData();

    this.subscription$ = this.svcSearch.onListenCriterio().subscribe((criterio: string)=>{
      if(criterio != ''){
        this.searchCriterio(criterio);
      }else{
        this.getAllData();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
      this.selectedRegion = this.defaultBindingsList[0];
  }

  getPaisesByRegion(region:string){
    this.svcPaises.getPaisesByRegion(region).subscribe((data:any[])=>{
      this.paisesList = data;
    }); 
  }



  getAllData(){
	this.svcPaises.getAllPaises().subscribe((data:any[]) =>{
		this.paisesList = data;
	});
  }

  searchCriterio(criterio:string){
    this.svcPaises.getPaisesByName(criterio).subscribe((data:any[])=>{
      this.paisesList = data;
    }); 
  }

  onChangeRegion(){
    if(this.selectedRegion.value == 0)
      this.getAllData();
    else
      this.getPaisesByRegion(this.selectedRegion.label);
    
  }
}
