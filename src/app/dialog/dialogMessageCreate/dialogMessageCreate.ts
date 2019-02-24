import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MessageModel } from '../../model/message.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog-message-create',
  templateUrl: './dialogMessageCreate.html',
  styleUrls: ['./dialogMessageCreate.css']
})
export class DialogMessageCreateComponent {
  @ViewChild('f') form: NgForm;
  message: MessageModel;
  constructor(
    private dialogRef: MatDialogRef<DialogMessageCreateComponent>
  ) {}
  onSubmit() {
    this.message = this.form.value;
    this.dialogRef.close(this.message);
  }
}
