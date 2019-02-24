import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MessageModel } from '../../model/message.model';
import { filter } from 'rxjs/operators';
import { DialogMessageEditComponent } from '../../dialog/dialogMessageEdit/dialogMessageEdit';
import { DialogMessageCreateComponent } from '../../dialog/dialogMessageCreate/dialogMessageCreate';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class AppMessageComponent {
  messages: MessageModel[] = [];
  dialogMessageEdit: MatDialogRef<DialogMessageEditComponent>;
  dialogMessageCreate: MatDialogRef<DialogMessageCreateComponent>;
  constructor(public dialog: MatDialog) {
    this.messages = [
      {id: 1, from: 'Destino 1', subject: 'subjet1', content: 'Este es el contenido q debe ser mas largo'},
      {id: 2, from: 'Destino 2', subject: 'subjet2', content: 'Este es el contenido q debe ser mas largo'},
      {id: 3, from: 'Destino 3', subject: 'subjet3', content: 'Este es el contenido q debe ser mas largo'},
      {id: 4, from: 'Destino 4', subject: 'subjet4', content: 'Este es el contenido q debe ser mas largo'}
    ];
  }
  openDialogMessageEdit(item) {
    this.dialogMessageEdit = this.dialog.open(DialogMessageEditComponent, {
      height: '350px',
      width: '600px',
      data: item
    });

    this.dialogMessageEdit
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
    this.dialogMessageCreate = this.dialog.open(DialogMessageCreateComponent, {
      height: '350px',
      width: '600px'
    });
    this.dialogMessageCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(message => {
        message.id = this.asigId();
        this.messages.push(message);
      });
  }
}
