import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  imports: [
    CommonModule
  ],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() image?: string;
  @Input() details?: string;

  expanded: boolean = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
