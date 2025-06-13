import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pate6485Personal, pate6485Country } from '../classpate6485';

@Component({
  selector: 'app-pate6485-pics',
  imports: [CommonModule],
  templateUrl: './pate6485-pics.component.html',
  styleUrl: './pate6485-pics.component.css'
})
export class Pate6485PicsComponent {
  @Input() pate6485Pics!: pate6485Personal;
  @Input() pate6485CountryPics!: pate6485Country;

  hardCodedStudentNo: number = 991790757;
  hardCodedCountryID: number = 356;
}
