import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params-getter',
  standalone: false,
  templateUrl: './params-getter.component.html',
  styleUrl: './params-getter.component.scss'
})
export class ParamsGetterComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Captured Token:', params['access_token']);
    });
  }
}