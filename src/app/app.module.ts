import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import { EditReservationComponent } from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import { DetailsReservationComponent } from './biens/reservation-bien/details-reservation/details-reservation.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    ListBienComponent,
    DetailBienComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    TimeLeftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    EditReservationComponent,
    DetailsReservationComponent,
    PathNotFoundComponent,
    ErrorsComponent,
    ConnexionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
