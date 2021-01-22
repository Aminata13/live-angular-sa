import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bien } from '../bien.model';
import { BienService } from '../bien.service';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {
  bien!: Bien;
  private sub: any;

  constructor(private route: ActivatedRoute, private bienSrv: BienService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: any) => {
        this.bien = data['bien'];
      }
    );
    /* const idBien = this.route.snapshot.params['id'];
    this.bien = this.bienSrv.getBienById(idBien);
    // For next time that the component will be loaded
    this.route.params.subscribe(
      (p: Params) => {
        const id = p['id'];
        this.bien = this.bienSrv.getBienById(id);
      }
    )*/
  }

}
