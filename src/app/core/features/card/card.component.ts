import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogContent,  MatDialogClose} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogActions, MatDialogContent, MatDialogClose],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent
{
  readonly dialog = inject(MatDialog);
  readonly card = inject<any>(MAT_DIALOG_DATA);

  constructor()
  {
  }

  ngOnInit()
  {
    console.log(this.card)
  }
}
