import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menus: any;

  constructor(private router: Router) {
    this.menus = {
      "data":[
        {
          "text": "Template Driven",
          icon: "fa fa-window-maximize  ",
          "link" : "templatedriven",
        },
        {
          "text": "Reactive Forms",
          icon: "fa fa-window-maximize  ",
          "link" : "/reactiveforms",
        }]}
  }

  onMenuClick(node: any) {
    if (node && node.hasOwnProperty('link')) {
      this.router.navigate([node.link]);
    }
  }
}
