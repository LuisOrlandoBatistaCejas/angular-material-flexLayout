import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMessageComponent } from './component/comprobante.component/comprobante.component';
import { AppComprobanteDetailComponent } from './component/comprobante-details.component/comprobante-detail.component';

import { DialogComprobanteEditComponent } from './dialog/dialogComprobanteEdit/dialogComprobanteEdit';
import { DialogComprobanteCreateComponent } from './dialog/dialogComprobanteCreate/dialogComprobanteCreate';
import { DialogComprobanteDetailCreateComponent } from './dialog/dialogComprobanteDetailCreate/dialogComprobanteDetailCreate';
import { DialogComprobanteDetailEditComponent } from './dialog/dialogComprobanteDetailEdit/dialogComprobanteDetailEdit';
import { HttpClientModule } from '@angular/common/http';

import { ComprobanteService } from './services/comprobante.service';
import { ComprobanteDetailService } from './services/comprobante-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
    AppComprobanteDetailComponent,
    DialogComprobanteEditComponent,
    DialogComprobanteCreateComponent,
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
    FormsModule,
    HttpClientModule
    // MatDialogRef
  ],
  entryComponents: [
    DialogComprobanteEditComponent,
    DialogComprobanteCreateComponent,
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
