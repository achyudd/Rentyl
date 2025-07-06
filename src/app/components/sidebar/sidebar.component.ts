import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  isCollapsed = false;

  @Input() currentTheme: 'light' | 'dark' = 'light';

  @Output() themeToggle = new EventEmitter<void>();

  onToggleClick(): void {
    this.themeToggle.emit();
  }

  railMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

}
