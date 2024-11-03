import { Component, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent
{
  readonly card = inject<any>(MAT_BOTTOM_SHEET_DATA);
}
