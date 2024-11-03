import { Component, inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'card-text',
  standalone: true,
  imports: [],
  templateUrl: './card-text.component.html',
  styleUrl: './card-text.component.scss'
})
export class CardTextComponent
{
  readonly text = inject<any>(MAT_BOTTOM_SHEET_DATA);
}
