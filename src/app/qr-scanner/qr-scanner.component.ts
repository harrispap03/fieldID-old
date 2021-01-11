import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent {
  error: string;
  userId: string;
  data = {};

  constructor(private afs: AngularFirestore) {}

  onScanSuccess(qrResult: string){
    this.userId = qrResult;
    this.afs.collection('users').doc(this.userId).get().toPromise()
    .then(doc => { console.log( JSON.stringify(doc.data(), null, 2));})
  }


  Error(e: Event) {
    this.error = 'Cameras not found';
  }
}

