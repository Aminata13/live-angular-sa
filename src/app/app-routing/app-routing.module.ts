import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddBienComponent } from '../biens/add-bien/add-bien.component';
import { DetailBienComponent } from '../biens/detail-bien/detail-bien.component';
import { ListBienComponent } from '../biens/list-bien/list-bien.component';
import { ReservationBienComponent } from '../biens/reservation-bien/reservation-bien.component';
import { DetailsReservationComponent } from '../biens/reservation-bien/details-reservation/details-reservation.component';
import { EditReservationComponent } from '../biens/reservation-bien/edit-reservation/edit-reservation.component';
import { PathNotFoundComponent } from '../path-not-found/path-not-found.component';
import { AuthGuardService } from '../auth-guard.service';
import { ErrorsComponent } from '../errors/errors.component';
import { BienResolverService } from '../bien-resolver.service';
import { ConnexionComponent } from '../connexion/connexion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'biens' },
  { path: 'biens', component: ListBienComponent },
  { path: 'biens/add', component: AddBienComponent },
  { path: 'biens/:id', component: DetailBienComponent, resolve: {bien: BienResolverService} },
  { path: 'reservations',
    //canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ReservationBienComponent,
    children: [
      { path: ':id', component: DetailsReservationComponent },
      { path: ':id/edit', component: EditReservationComponent },
    ]
  },
  { path: 'login', component: ConnexionComponent },
  { path: 'not-found', component: ErrorsComponent, data: {message: 'Page introuvable!'} },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
