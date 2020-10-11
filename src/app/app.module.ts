import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { RecordComponent } from './record/record.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

//Material Design stuff
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

// QR scanner module
import { QRCodeModule } from 'angularx-qrcode'; // for creating the QR code 
import { ZXingScannerModule } from '@zxing/ngx-scanner'; // for reading the QR code
// Firestore
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewUserComponent,
    RecordComponent,
    QrScannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    QRCodeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
