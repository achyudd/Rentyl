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

  roomImages: string[] = [
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
  'https://images.unsplash.com/photo-1560448075-bb485b067938'
];

currentImageIndex = 0;

nextImage() {
  this.currentImageIndex =
    (this.currentImageIndex + 1) % this.roomImages.length;
}

prevImage() {
  this.currentImageIndex =
    (this.currentImageIndex - 1 + this.roomImages.length) %
    this.roomImages.length;
}


}
