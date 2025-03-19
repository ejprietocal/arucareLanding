import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';


@Component({
  selector: 'app-privacy-policy',
  imports: [
    PanelModule,
    CommonModule,
    DividerModule,
    FieldsetModule
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

}
