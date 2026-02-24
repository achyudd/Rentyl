import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PropertiesComponent, PropertyViewComponent } from './pages/properties/properties.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { RentsAndPaymentsComponent } from './pages/rents-and-payments/rents-and-payments.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';


export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'tenants', component: TenantsComponent },
      { path: 'rents-and-payments', component: RentsAndPaymentsComponent },
      { path: 'expenses', component: ExpensesComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'documents', component: DocumentsComponent },
      { path: 'settings', component: SettingsComponent },

      { path: 'property-view', component: PropertyViewComponent }

    ]
  },

  { path: '**', redirectTo: 'login' }

];
