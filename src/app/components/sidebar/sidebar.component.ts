import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    ...MATERIAL_IMPORTS,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  isMobile = false;

  @Input() currentTheme: 'light' | 'dark' = 'light';
  @Output() themeToggle = new EventEmitter<void>();

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 640;

    if (this.isMobile) {
      this.isCollapsed = true;
    }
  }

  onToggleClick(): void {
    this.themeToggle.emit();
  }

  railMenu() {
    if (this.isMobile) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
