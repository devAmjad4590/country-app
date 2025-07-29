import { Component, inject, OnInit, signal } from '@angular/core';
import { Card } from '../components/card/card';
import { Country } from '../../model/country.type';
import { CountryService } from '../services/country-service';
import { catchError } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Loading } from '../components/loading/loading';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [Card, RouterLink, Loading, CommonModule],
  templateUrl: './countries.html',
  styleUrl: './countries.scss'
})
export class Countries implements OnInit {
  countriesList = signal<Array<Country>>([])
  countriesService = inject(CountryService)
  loading = signal(true)


  ngOnInit(): void {
    this.countriesService.getCountries().pipe(catchError(err => {
      console.log(err);
      throw err;
    })).subscribe((count) => {
      this.countriesList.set(count)
      this.loading.set(false)
    })
  }
}
