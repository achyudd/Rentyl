import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tenants',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, CommonModule],
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.scss'
})
export class TenantsComponent {

  displayedColumns: string[] = [
    'tenant',
    'property',
    'lease',
    'rent',
    'status',
    'actions'
  ];

  dataSource = [
    {
      name: 'Sarah Chen',
      email: 's.chen@email.com',
      property: 'Lakeview Apartments',
      unit: 'Unit 3B',
      leaseStart: '2024-03-01',
      leaseEnd: '2025-02-28',
      rent: '$1,200/mo',
      status: 'Active',
      initials: 'SC'
    },
    {
      name: 'Marcus Johnson',
      email: 'm.johnson@email.com',
      property: 'Lakeview Apartments',
      unit: 'Unit 5A',
      leaseStart: '2023-06-01',
      leaseEnd: '2025-05-31',
      rent: '$1,200/mo',
      status: 'Inactive',
      initials: 'MJ'
    },
    {
      name: 'Priya Patel',
      email: 'priya.p@email.com',
      property: 'Lakeview Apartments',
      unit: 'Unit 7C',
      leaseStart: '2024-09-01',
      leaseEnd: '2025-08-31',
      rent: '$1,200/mo',
      status: 'Active',
      initials: 'PP'
    }
  ];
}
