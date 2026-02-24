import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';

@Component({
    selector: 'app-dashboard',
      standalone: true,
    imports: [ MATERIAL_IMPORTS],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
}

