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
