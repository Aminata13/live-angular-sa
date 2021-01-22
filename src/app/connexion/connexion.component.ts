import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  @ViewChild('loginForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  /* onSubmit(form: HTMLFontElement) {
    console.log(form);
  } */
  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }

}
