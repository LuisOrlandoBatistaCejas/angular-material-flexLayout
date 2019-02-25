import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMessageComponent } from './component/message.component/message.component';
import { AppComprobanteDetailComponent } from './component/comprobante-details.component/comprobante-detail.component';

import { DialogMessageEditComponent } from './dialog/dialogMessageEdit/dialogMessageEdit';
import { DialogMessageCreateComponent } from './dialog/dialogMessageCreate/dialogMessageCreate';
import { DialogComprobanteDetailCreateComponent } from './dialog/dialogComprobanteDetailCreate/dialogComprobanteDetailCreate';
import { DialogComprobanteDetailEditComponent } from './dialog/dialogComprobanteDetailEdit/dialogComprobanteDetailEdit';

import { ComprobanteService } from './services/comprobante.service';
import { ComprobanteDetailService } from './services/comprobante-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
    AppComprobanteDetailComponent,
    DialogMessageEditComponent,
    DialogMessageCreateComponent,
    DialogComprobanteDetailCreateComponent,
    DialogComprobanteDetailEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule
    // MatDialogRef
  ],
  entryComponents: [
    DialogMessageEditComponent,
    DialogMessageCreateComponent,
    DialogComprobanteDetailCreateComponent,
    DialogComprobanteDetailEditComponent
  ],
  providers: [
    ComprobanteService,
    ComprobanteDetailService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
