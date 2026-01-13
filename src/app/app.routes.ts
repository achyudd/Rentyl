import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { RentsAndPaymentsComponent } from './pages/rents-and-payments/rents-and-payments.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
    },

    { 
        path: 'dashboard', 
        component: DashboardComponent,
        data: { title: 'Dashboard' }
    },
    
    { 
        path: 'properties', 
        component: PropertiesComponent,
        data: { title: 'My Properties' }
    },
    
    { 
        path: 'tenants', 
        component: TenantsComponent,
        data: { title: 'Tenants' }
    },
    
    { 
        path: 'rents-and-payments', 
        component: RentsAndPaymentsComponent,
        data: { title: 'Rents and Payments' }
    },
    
    { 
        path: 'expenses', 
        component: ExpensesComponent,
        data: { title: 'Expenses' }
    },
    
    { 
        path: 'maintenance', 
        component: MaintenanceComponent,
        data: { title: 'Maintenance' }
    },
    
    { 
        path: 'reports', 
        component: ReportsComponent,
        data: { title: 'Reports' }
    },
    
    { 
        path: 'documents', 
        component: DocumentsComponent,
        data: { title: 'Documents' }
    },
    
    { 
        path: 'settings', 
        component: SettingsComponent,
        data: { title: 'Settings' }
    },

    { 
        path: '**', 
        redirectTo: 'dashboard' 
    }
];