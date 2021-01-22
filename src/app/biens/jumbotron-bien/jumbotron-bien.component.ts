import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-jumbotron-bien',
  templateUrl: './jumbotron-bien.component.html',
  styleUrls: ['./jumbotron-bien.component.css']
})
export class JumbotronBienComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login('padjiby@gmail.com', 'password');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
