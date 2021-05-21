import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
  users$;
  displayedColumns: string[] = ['name', 'surname', 'idNum', 'checkInTime'];

  constructor(private afs: AngularFirestore){}

  ngOnInit(){
    this.users$ = this.afs.collection('recentUsers', ref => ref.orderBy('checkInTime', 'desc')).valueChanges();
  }
}