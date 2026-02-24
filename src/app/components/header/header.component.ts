import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MATERIAL_IMPORTS,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  pageTitle: string = 'Dashboard';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['title'] || 'Dashboard';
      })
    ).subscribe(title => {
      this.pageTitle = title;
    });
  }

}
