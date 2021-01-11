import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  idNum: number;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  recentUserDoc;
  user: Observable<any>;

  array = []
  constructor(private afs: AngularFirestore){}

  ngOnInit(){
    this.recentUserDoc = this.afs.collection('recentUsers');
    this.user = this.recentUserDoc.valueChanges();
  }

  get userDoc(){
    return this.recentUserDoc.ref.id;
  }
}
