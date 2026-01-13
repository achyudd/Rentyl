import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";


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
export class SidebarComponent {


  isCollapsed = true;

  @Input() currentTheme: 'light' | 'dark' = 'light';

  @Output() themeToggle = new EventEmitter<void>();

  onToggleClick(): void {
    this.themeToggle.emit();
  }

  railMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

  onPropertiesClick(){

  }

}
