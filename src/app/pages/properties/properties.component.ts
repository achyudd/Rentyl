import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';


@Component({
    selector: 'app-properties',
    standalone: true,
    imports: [...MATERIAL_IMPORTS],
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

}



@Component({
    selector: 'app-property-view',
    standalone: true,
    imports: [...MATERIAL_IMPORTS],
    templateUrl: './property-view.html',
    styleUrls: ['./properties.component.scss']
})
export class PropertyViewComponent {

}
