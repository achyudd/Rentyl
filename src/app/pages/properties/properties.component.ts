import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';

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
            width: '750px',

        });
    }


    tenantDetails() {
        const dialogrRef = this.dialog.open(TenantDetailsComponent, {
            width: '500px',
        });
    }

    viewPaymentHistory() {
        const dialogrRef = this.dialog.open(PaymentHistoryComponent, {
            width: '500px',
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



@Component({
    selector: 'app-tenant-details-dialog',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
    ],
    templateUrl: './tenant-details-dialog.html',
    styleUrl: './properties.component.scss'
})
export class TenantDetailsComponent {


}


export interface PeriodicElement {
  month: string; 
  name: string;     // Changed from monthname to match template
  status: string; 
  amount: string;    // Changed from statusamount to match template
}

const ELEMENT_DATA: PeriodicElement[] = [
  {month: '2 January 2026', name: 'Alvin Sabu', status: 'Paid', amount: '$1200'},
  {month: '2 February 2026', name: 'Alvin Sabu', status: 'Paid', amount: '$1200'},
  {month: '2 March 2026', name: 'Alvin Sabu', status: 'Pending', amount: '$1200'},
  {month: '2 April 2026', name: 'Alvin Sabu', status: 'Paid', amount: '$1200'},
  {month: '2 May 2026', name: 'Alvin Sabu', status: 'Overdue', amount: '$1200'},
];

@Component({
    selector: 'app-payment-history-dialog',
    standalone: true,
    imports: [
        ...MATERIAL_IMPORTS,
        CommonModule
    ],
    templateUrl: './payment-history-dialog.html',
    styleUrl: './properties.component.scss'
})
export class PaymentHistoryComponent {
    displayedColumns: string[] = ['month', 'status']; // Column identifiers
    
    // Add header definitions to match the column IDs
    // These will be used in the template
    monthColumn = 'month';
    statusColumn = 'status';
    
    dataSource = ELEMENT_DATA;
}