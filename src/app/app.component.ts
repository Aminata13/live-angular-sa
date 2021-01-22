import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-sa';
  active = false;
  btnText = 'Activer le champ'

  onClickBtn() {
    this.active = !this.active;
    this.btnText = this.active ? 'Désactiver le champ' : 'Activer le champ'
  }
}
