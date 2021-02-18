import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent {
  private qrResult$ = new BehaviorSubject(null);
  private sub;
  private userInfo;
  error: string;
  userId: string;
  data = {};

  constructor(private afs: AngularFirestore) {
    this.sub = this.qrResult$.pipe(
      filter(id => !!id),
      distinctUntilChanged()
    ).subscribe( IncomingQRResult => {
      console.log(IncomingQRResult)
     this.userInfo = this.afs.collection('users').doc(IncomingQRResult).get()
     console.log(this.userInfo)
    });
  }

  onScanSuccess(qrResult: string){
    this.qrResult$.next(qrResult);
  }

  Error(e: Event) {
    this.error = 'Cameras not found';
  }
}

// this.userId = qrResult;
//     this.afs.collection('users').doc(this.userId).get().toPromise()
//     .then(doc => doc.data())
//     .then(data => this.afs.collection('recentUsers').doc(this.userId).set(data));
