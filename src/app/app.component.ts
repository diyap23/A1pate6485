import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './modules/material-ui.module';
import {CommonModule} from '@angular/common';
import { pate6485Personal } from './classpate6485';
import { pate6485Country } from './classpate6485';
import { HeaderPate6485Component } from './header-pate6485/header-pate6485.component';
import { Pate6485AboutComponent } from './pate6485-about/pate6485-about.component';
import { Pate6485CountryComponent } from './pate6485-country/pate6485-country.component';
import { Pate6485PicsComponent } from './pate6485-pics/pate6485-pics.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, CommonModule, HeaderPate6485Component, Pate6485AboutComponent, Pate6485CountryComponent, Pate6485PicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1pate6485';

  PERpate6485: pate6485Personal = {
    pate6485FullName: 'Diya Patel',
    pate6485StudentNo: 991790757,
    pate6485LoginName: 'pate6485',
    pate6485SheridanEmail: 'pate6485@sheridancollege.ca',
    pate6485SheridanHomeCampus: 'Davis',
    pate6485Image: 'img-1.jpg', 
  }

  CTRYpate6485: pate6485Country = {
    pate6485CountryName: 'India',
    pate6485CountryID: 356,
    pate6485CountryCapital: 'New Delhi',
    pate6485CountryAvgSalary: 32000,
    pate6485CountryFlag: 'countryFlag.jpg',
  }
}
