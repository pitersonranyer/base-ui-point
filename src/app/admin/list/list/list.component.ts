import { Component, OnInit} from '@angular/core';
import { ApiPixService } from 'src/app/services/api.pix';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  parciais = [];

  constructor(
    private listarTimesDaCompeticaoService: ApiPixService,
  ) { }
  
  ngOnInit() {

    this.listarTimesDaCompeticaoService.listarTimesDaCompeticao(2, 9)
     .subscribe((resultParcial) => {
        this.parciais = resultParcial;
      })
    
  }

  
}
