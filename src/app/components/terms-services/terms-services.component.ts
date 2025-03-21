import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-terms-services',
  imports: [
    PanelMenuModule,
    CommonModule,
    ScrollPanelModule
  ],
  templateUrl: './terms-services.component.html',
  styleUrl: './terms-services.component.css'
})
export class TermsServicesComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items= [
      { label: 'Introduction', icon: 'pi pi-info-circle', command: () => this.scrollToSection('introduction') },
      { label: 'App Usage & Modifications', icon: 'pi pi-cog', command: () => this.scrollToSection('usage') },
      { label: 'Security & Data Protection', icon: 'pi pi-lock', command: () => this.scrollToSection('security') },
      { label: 'Third-Party Services', icon: 'pi pi-external-link', command: () => this.scrollToSection('third-party') },
      { label: 'Connectivity Responsibility', icon: 'pi pi-wifi', command: () => this.scrollToSection('connectivity') },
      { label: 'User Responsibility', icon: 'pi pi-user', command: () => this.scrollToSection('user-responsibility') },
      { label: 'Updates & Discontinuation', icon: 'pi pi-refresh', command: () => this.scrollToSection('updates') },
      { label: 'Changes to Terms & Conditions', icon: 'pi pi-file', command: () => this.scrollToSection('changes') },
      { label: 'Contact Us', icon: 'pi pi-envelope', command: () => this.scrollToSection('contact') }
    ];

  }


  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
