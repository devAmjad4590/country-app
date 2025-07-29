import { Component, input } from '@angular/core';
import { Country } from '../../../model/country.type';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  country = input.required<Country>()
}
