import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
    this.message = 'Hello';
  }
}
