import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MessageModel } from './model/message.model';
import { NgForm } from '@angular/forms';
// import { DialogMessageCreateComponent } from './dialogMessagesCreate/dialogMessageCreate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-flexLayout';
  messages: MessageModel[] = [];
  constructor(public dialog: MatDialog) {
    this.messages = [
      {from: 'Destino 1', subject: 'subjet1', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 2', subject: 'subjet2', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 3', subject: 'subjet3', content: 'Este es el contenido q debe ser mas largo'},
      {from: 'Destino 4', subject: 'subjet4', content: 'Este es el contenido q debe ser mas largo'}
    ];
  }
  openDialogMessageCreate(item) {
    this.dialog.open(DialogMessageCreateComponent, {
      height: '400px',
      width: '600px',
      data: item
    });
  }
}

@Component({
  selector: 'app-dialog-message-create',
  templateUrl: './dialogMessagesCreate/dialogMessageCreate.html',
  styleUrls: ['./dialogMessagesCreate/dialogMessageCreate.css']
})
export class DialogMessageCreateComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  item: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.item = this.data;
  }
  changeContent() {
    this.item.content = 'Me llamo Luis';
  }
  onSubmit() {
    console.log(this.form);
  }
}
