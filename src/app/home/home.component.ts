import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, state } from '@angular/animations';
import { Meta } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('chevronL', [
      state('hello', style({
        left: 0,
      })),
      transition('void => *', animate('300ms ease-out'))
    ]),
    trigger('chevronR', [
      state('hello', style({
        left: 0,
      })),
      transition('void => *', animate('250ms 300ms ease-out'))
    ]),
    trigger('logo', [
      state('hello', style({
        transform: 'scale(1)'
      })),
      transition('void => *', animate('300ms 400ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'anthillsolutions' });
    this.meta.addTag({ name: 'og:url', content: 'https://anthillsolutions.fr' });
    this.meta.addTag({ name: 'og:image', content: 'assets/img/anthillsolutions_1000x500.jpg' });
  }

  ngOnInit() {
    this.message = 'hello';
  }
}
