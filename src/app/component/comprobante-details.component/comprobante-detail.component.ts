import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MessageModel } from '../../model/message.model';
import { DialogComprobanteDetailEditComponent } from '../../dialog/dialogComprobanteDetailEdit/dialogComprobanteDetailEdit';
import { DialogComprobanteDetailCreateComponent } from '../../dialog/dialogComprobanteDetailCreate/dialogComprobanteDetailCreate';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-comprobante-detail',
  templateUrl: './comprobante-detail.component.html',
  styleUrls: ['./comprobante-detail.component.css']
})
export class AppComprobanteDetailComponent {
  title = 'angular-material-flexLayout';
  messages: MessageModel[] = [];
  dialogComprobanteDetailEdit: MatDialogRef<DialogComprobanteDetailEditComponent>;
  dialogComprobanteDetailCreate: MatDialogRef<DialogComprobanteDetailCreateComponent>;
  constructor(public dialog: MatDialog) {
    this.messages = [
      {id: 1, from: 'Destino 1', subject: 'subjet1', content: 'Este es el contenido q debe ser mas largo'},
      {id: 2, from: 'Destino 2', subject: 'subjet2', content: 'Este es el contenido q debe ser mas largo'},
      {id: 3, from: 'Destino 3', subject: 'subjet3', content: 'Este es el contenido q debe ser mas largo'},
      {id: 4, from: 'Destino 4', subject: 'subjet4', content: 'Este es el contenido q debe ser mas largo'}
    ];
  }
  openDialogMessageEdit(item) {
    this.dialogComprobanteDetailEdit = this.dialog.open(DialogComprobanteDetailEditComponent, {
      height: '350px',
      width: '600px',
      data: item
    });

    this.dialogComprobanteDetailEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(message => {
        const index = this.messages.findIndex(item => item.id === message.id);
        this.messages[index] = message;
        // this.messages.push(message);
      });
  }
  deleteMessage(message) {
    const index = this.messages.findIndex(item => item.id === message.id);
    this.messages.splice(index, 1);
  }
  asigId() {
    let idMax = 0;
    for (const item of this.messages) {
      if (item.id > idMax) {
        idMax = item.id;
      }
    }
    idMax++;
    return idMax;
  }
  openDialogMessageCreate() {
    this.dialogComprobanteDetailCreate = this.dialog.open(DialogComprobanteDetailCreateComponent, {
      height: '350px',
      width: '600px'
    });
    this.dialogComprobanteDetailCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(message => {
        message.id = this.asigId();
        this.messages.push(message);
      });
  }
}
