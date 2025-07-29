import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CountryService } from '../services/country-service';
import { catchError } from 'rxjs';
import { Country as CountryType } from '../../model/country.type';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Loading } from '../components/loading/loading';

@Component({
  selector: 'app-country',
  providers: [CountryService],
  imports: [CommonModule, DecimalPipe, Loading],
  templateUrl: './country.html',
  styleUrl: './country.scss',
})
export class Country implements OnInit {
  @Input() code: String = '';
  countryService = inject(CountryService);
  country = signal<CountryType | null>(null);
  loading = signal(true)

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.countryService
      .getSelectedCountry(this.code)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((cn) => {
        this.country.set(cn[0]);
        this.loading.set(false)
      });
  }

  goBack(): void {
    this.location.back();
  }
}
