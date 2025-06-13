import { Component, Input } from '@angular/core';
import { pate6485Country } from '../classpate6485';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pate6485-country',
  imports: [CommonModule],
  templateUrl: './pate6485-country.component.html',
  styleUrl: './pate6485-country.component.css'
})
export class Pate6485CountryComponent {
  @Input() pate6485Data! : pate6485Country;
}
