import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css'],
})
export class ItemBienComponent implements OnInit {
  @Input() bien: any;

  constructor() {}

  ngOnInit(): void {}
}
