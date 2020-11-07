import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/core/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  paisesList: any[] = [];
  constructor(private svcPaises: PaisesService) { 
    this.svcPaises.getPaisesByName("United").subscribe((data:any[])=>{
      this.paisesList = data;
    }); 
  }

  ngOnInit(): void {

  }

  searchCriterio(criterio:string){
    this.svcPaises.getPaisesByName(criterio).subscribe((data:any[])=>{
      this.paisesList = data;
    }); 
  }
}
