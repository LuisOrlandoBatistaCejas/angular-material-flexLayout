import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { MessageModel } from '../model/message.model';

@Component({
  selector: 'app-dialog-message-edit',
  templateUrl: './dialogMessageEdit.html',
  styleUrls: ['./dialogMessageEdit.css']
})
export class DialogMessageEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  item: MessageModel;
  message: MessageModel;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogMessageEditComponent>
  ) {}

  ngOnInit() {
    this.item = this.data;
  }
  changeContent() {
    this.item.content = 'Me llamo Luis';
  }
  onSubmit() {
    this.message = this.form.value;
    this.message.id = this.item.id;
    this.dialogRef.close(this.message);
  }
}
