import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogMessageCreateComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { DialogMessageCreateComponent } from './dialogMessagesCreate/dialogMessageCreate';

@NgModule({
  declarations: [
    AppComponent,
    DialogMessageCreateComponent
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
    DialogMessageCreateComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
