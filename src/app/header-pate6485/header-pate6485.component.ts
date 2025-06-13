import { Component, Input } from '@angular/core';
import { pate6485Personal } from '../classpate6485';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header-pate6485',
  imports: [CommonModule],
  templateUrl: './header-pate6485.component.html',
  styleUrl: './header-pate6485.component.css'
})
export class HeaderPate6485Component {

  @Input() pate6485Child!: pate6485Personal;
  cDate = new Date();


}
