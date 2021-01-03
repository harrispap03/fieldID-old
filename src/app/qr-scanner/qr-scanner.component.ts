import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent {
  error: string;

  constructor(private afs: AngularFirestore) {}

  onScanSuccess(qrResult: string) {
    this.afs.collection('recentUsers').add(qrResult);
  }

  Error(e: Event) {
    this.error = 'Cameras not found';
  }
}
