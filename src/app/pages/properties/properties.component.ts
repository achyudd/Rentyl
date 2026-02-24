import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";


@Component({
    selector: 'app-properties',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
        RouterLink,
    ],
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

}



@Component({
    selector: 'app-property-view',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
        RouterLink,
    ],
    templateUrl: './property-view.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertyViewComponent {

    constructor(private dialog: MatDialog) { }

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


    manageProperty() {
        const dialogrRef = this.dialog.open(ManagePropertyDialogComponent, {
            width: '400px',

        });
    }

}


@Component({
    selector: 'app-manage-property-dialog',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
    ],
    templateUrl: './manage-property-dialog.html',
    styleUrl: './properties.component.scss'
})
export class ManagePropertyDialogComponent {


}