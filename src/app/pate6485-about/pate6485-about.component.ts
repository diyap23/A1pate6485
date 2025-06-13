import { Component, Input } from '@angular/core';
import { pate6485Personal } from '../classpate6485';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pate6485-about',
  imports: [CommonModule],
  templateUrl: './pate6485-about.component.html',
  styleUrl: './pate6485-about.component.css'
})
export class Pate6485AboutComponent {
  @Input() pate6485Me!: pate6485Personal;

}
