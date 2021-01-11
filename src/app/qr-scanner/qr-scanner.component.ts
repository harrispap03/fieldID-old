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
  data = {
   firstName: 'Harry'
  }
  constructor(private afs: AngularFirestore) {}

  onScanSuccess(qrResult: string) {
    this.userId = qrResult;
    this.afs.collection('recentUsers').doc(this.userId).set(this.data /* + the data that's on this document on the users collection */);
  }

  Error(e: Event) {
    this.error = 'Cameras not found';
  }
}
