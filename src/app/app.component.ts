  import { Component } from '@angular/core';
  import { RouterOutlet, Routes } from '@angular/router';
  import { SidebarComponent } from './components/sidebar/sidebar.component';
  import { HeaderComponent } from './components/header/header.component';
  import { DashboardComponent } from './pages/dashboard/dashboard.component';
  import { PropertiesComponent } from './pages/properties/properties.component';
  import { RentsAndPaymentsComponent } from './pages/rents-and-payments/rents-and-payments.component';
  import { ExpensesComponent } from './pages/expenses/expenses.component';


  @Component({
      selector: 'app-root',
      standalone: true,
      imports: [RouterOutlet, SidebarComponent, HeaderComponent],
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
  })


  export class AppComponent {
    title = 'rentyl';

    currentTheme: 'light' | 'dark' = 'light';



    ngOnInit(): void {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const prefersDark = window.matchMedia('prefers-color-scheme: dark').matches;
      this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }

    toggleTheme(): void {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.currentTheme);
      localStorage.setItem('theme', this.currentTheme);
    }


  }
