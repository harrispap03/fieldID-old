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

 async onScanSuccess(qrResult: string){
    this.userId = qrResult;
    this.afs.collection('users').doc(this.userId).get().toPromise()
    .then(doc => doc.data())
    .then(data => this.afs.collection('recentUsers').add(data));
    await new Promise(done => setTimeout(() => console.log('done'), 5000));
  }

  Error(e: Event) {
    this.error = 'Cameras not found';
  }
}

