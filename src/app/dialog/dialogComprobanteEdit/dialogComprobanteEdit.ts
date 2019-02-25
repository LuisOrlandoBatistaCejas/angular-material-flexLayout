import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ComprobanteModel } from '../../model/comprobante.model';

@Component({
  selector: 'app-dialog-message-edit',
  templateUrl: './dialogComprobanteEdit.html',
  styleUrls: ['./dialogComprobanteEdit.css']
})
export class DialogComprobanteEditComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  item: ComprobanteModel;
  comprobante: ComprobanteModel;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComprobanteEditComponent>
  ) {}

  ngOnInit() {
    this.item = this.data;
  }
  onSubmit() {
    this.comprobante = this.form.value;
    this.comprobante.Ruc = this.item.Ruc;
    this.comprobante.Numero = this.item.Numero;
    this.dialogRef.close(this.comprobante);
  }
}
