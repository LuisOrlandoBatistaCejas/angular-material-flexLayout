import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComprobanteModel } from '../../model/comprobante.model';
import { filter } from 'rxjs/operators';
import { DialogComprobanteEditComponent } from '../../dialog/dialogComprobanteEdit/dialogComprobanteEdit';
import { DialogMessageCreateComponent } from '../../dialog/dialogMessageCreate/dialogMessageCreate';

@Component({
  selector: 'app-message',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class AppMessageComponent {
  comprobanteList: ComprobanteModel[] = [];
  dialogComprobanteEdit: MatDialogRef<DialogComprobanteEditComponent>;
  dialogComprobanteCreate: MatDialogRef<DialogMessageCreateComponent>;
  constructor(public dialog: MatDialog) {
    this.comprobanteList.push(new ComprobanteModel('1790016919001', '006111000362159', '1792231612001', '2019-01-29', 'HOMERO SALAS S/N Y AV. DE LA PRENSA', '2996500', '', 17.54000, 0.00000, 1.47000, 19.01000, 0));
    this.comprobanteList.push(new ComprobanteModel('1791414713001', '001001000039698', '1792231612001', '2019-01-29', 'Pichincha Quito Pintag Vía Pifo SN y Vía Alangasi', null, '', 151.65000, 0.00000, 7.40000, 159.05000, 0));
    this.comprobanteList.push(new ComprobanteModel('1792252903001', '002004000587976', '1792231612001', '2019-01-17', 'TABABELA - CORREDOR ALPACHACA, LOTE 18 - NUEVO AEROPUERTO INTERNACIONAL', '2222222', '', 8.99000, 2.01000, 0.00000, 8.99000, 0));
    this.comprobanteList.push(new ComprobanteModel('1792252903001', '003001000586678', '1792231612001', '2019-01-17', 'AV. AMAZONAS Y AV. DE LA PRENSA', '2222222', '', 7.99000, 0.01000, 0.00000, 7.99000, 0));
    this.comprobanteList.push(new ComprobanteModel('1792599512001', '001001000003704', '1792231612001', '2019-01-21', 'PASAJE S/N N3-62 Y SIMON BOLIVAR, PUENTE 9 URBANIZACION ARMENIA 1 VALLE DE LOS CHILLOS- QUITO -ECUADOR ', '6007470 ext 102', '', 60.00000, 0.00000, 7.20000, 67.20000, 0));
    this.comprobanteList.push(new ComprobanteModel('2290324907001', '001001000001803', '1792231612001', '2019-01-17', 'EL COCA ', '062881715', '', 224.10000, 24.90000, 26.89000, 250.99000, 0));
  }
  openDialogEdit(item) {
    this.dialogComprobanteEdit = this.dialog.open(DialogComprobanteEditComponent, {
      height: '500px',
      width: '600px',
      data: item
    });

    this.dialogComprobanteEdit
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(comprobante => {
        const index = this.comprobanteList.findIndex(object => object.Ruc === comprobante.Ruc && object.Numero === comprobante.Numero);
        this.comprobanteList[index] = comprobante;
        // this.comprobanteList.push(message);
      });
  }
  delete(comprobante) {
    const index = this.comprobanteList.findIndex(item => item.Ruc === comprobante.Ruc && item.Numero === comprobante.Numero);
    this.comprobanteList.splice(index, 1);
  }
  openDialogCreate() {
    this.dialogComprobanteCreate = this.dialog.open(DialogMessageCreateComponent, {
      height: '350px',
      width: '600px'
    });
    this.dialogComprobanteCreate
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(comprobante => {
        // comprobante.id = this.asigId();
        this.comprobanteList.push(comprobante);
      });
  }
}
