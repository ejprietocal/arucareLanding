import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy&policy' },
    { name: 'Terms of Service', url: '/termsAndConditions' }
  ];
}
