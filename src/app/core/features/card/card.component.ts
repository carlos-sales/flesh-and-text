import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent,  MatDialogClose} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CardDetailsComponent } from './card-details/card-details.component';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogClose, MatBottomSheetModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent
{
  readonly dialog = inject(MatDialog);
  private _bottomSheet = inject(MatBottomSheet);
  readonly card = inject<any>(MAT_DIALOG_DATA);

  constructor()
  {
  }

  ngOnInit()
  {
    this.openSheet();
  }

  openSheet()
  {
    this._bottomSheet.open(CardDetailsComponent,
      {
        data: this.card,
      }
    );
  }
}
