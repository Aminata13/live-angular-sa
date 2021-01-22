import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Bien } from './biens/bien.model';
import { BienService } from './biens/bien.service';

@Injectable({
  providedIn: 'root'
})
export class BienResolverService implements Resolve<Bien> {

  constructor(private bienSrv: BienService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //throw new Error('Method not implemented.');
    return this.bienSrv.getBienById(+route.params['id']);
  }
}
