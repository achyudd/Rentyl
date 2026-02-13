import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})

export class MainLayoutComponent {
  title = 'rentyl';

  currentTheme: 'light' | 'dark' = 'light';



  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('prefers-color-scheme: dark').matches;
    this.currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }

  toggleTheme(): void {
    document.documentElement.classList.add('theme-switching');

    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);

    requestAnimationFrame(() => {
      document.documentElement.classList.remove('theme-switching');
    });
  }

}
