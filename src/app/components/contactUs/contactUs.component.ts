import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private clipboardApi: ClipboardService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  copyToClipBoard():void {
    this.clipboardApi.copyFromContent('+503 22637246');
    this._snackBar.open('Teléfono copiado al portapapeles', 'Ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
      panelClass: ['bg-blue-800', 'text-white']
    });
  }

}
