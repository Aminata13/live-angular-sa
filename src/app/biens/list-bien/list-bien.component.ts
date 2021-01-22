import { Component, OnInit } from '@angular/core';
import { Bien } from '../bien.model';
import { BienService } from '../bien.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {
  search: string = '';
  biens: Bien[];

  constructor(private bienSrv: BienService) {
    this.biens = [];
  }

  ngOnInit(): void {
    this.biens = this.bienSrv.getAllBiens();
  }
}
