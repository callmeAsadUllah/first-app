import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// interfaces
import { HousingLocation } from '../../interfaces/housing/housing-location';
// services
import { HousingService } from '../../services/housing/housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
        housingLocation?.state.toLowerCase().includes(text.toLowerCase())
    );
  }
}
