import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComprobanteDetailEditComponent } from '../../dialog/dialogComprobanteDetailEdit/dialogComprobanteDetailEdit';
import { DialogComprobanteDetailCreateComponent } from '../../dialog/dialogComprobanteDetailCreate/dialogComprobanteDetailCreate';
import { filter } from 'rxjs/operators';
import { ComprobanteDetailService } from '../../services/comprobante-detail.service';
import { ComprobanteService } from '../../services/comprobante.service';
import { ComprobanteDetailModel } from '../../model/comprobante-detail.model';

@Component({
  selector: 'app-comprobante-detail',
  templateUrl: './comprobante-detail.component.html',
  styleUrls: ['./comprobante-detail.component.css']
})
export class AppComprobanteDetailComponent implements OnInit {
  title = 'angular-material-flexLayout';
  comprobanteDetailList: ComprobanteDetailModel[] = [];
  dialogComprobanteDetailEdit: MatDialogRef<DialogComprobanteDetailEditComponent>;
  dialogComprobanteDetailCreate: MatDialogRef<DialogComprobanteDetailCreateComponent>;
  constructor(private comprobanteService: ComprobanteService, public dialog: MatDialog, public comprobanteDetailService: ComprobanteDetailService) {}
  ngOnInit() {
    this.comprobanteDetailList = this.comprobanteDetailService.getComprobantes();
    this.comprobanteService.selectedToDelete.subscribe(
      (objectToDeleted) => {
        this.deleteEmitter(objectToDeleted);
      }
    );
  }
  deleteEmitter(object) {
    const objectList = this.comprobanteDetailList.filter(item => item.comprobante_Ruc === object.ruc && item.comprobante_Numero === object.numero);
    for (const elem of objectList) {
      const index = this.comprobanteDetailList.findIndex(item => item.comprobante_Ruc === elem.comprobante_Ruc && item.comprobante_Numero === elem.comprobante_Numero);
      this.comprobanteDetailList.splice(index, 1);
    }
  }
  openDialogEdit(item) {
    this.dialogComprobanteDetailEdit = this.dialog.open(DialogComprobanteDetailEditComponent, {
      height: '400px',
      width: '600px',
      data: item
    });

    this.dialogComprobanteDetailEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(message => {
        const index = this.comprobanteDetailList.findIndex(item => item.id === message.id);
        this.comprobanteDetailList[index] = message;
      });
  }
  delete(object) {
    const index = this.comprobanteDetailList.findIndex(item => item.id === object.id);
    if (index !== -1) {
      this.comprobanteDetailList.splice(index, 1);
    }
  }
  asigId() {
    let idMax = 0;
    for (const item of this.comprobanteDetailList) {
      if (item.id > idMax) {
        idMax = item.id;
      }
    }
    idMax++;
    return idMax;
  }
  openDialogCreate() {
    this.dialogComprobanteDetailCreate = this.dialog.open(DialogComprobanteDetailCreateComponent, {
      height: '400px',
      width: '600px'
    });
    this.dialogComprobanteDetailCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(item => {
        item.id = this.asigId();
        this.comprobanteDetailList.push(item);
      });
  }
}
