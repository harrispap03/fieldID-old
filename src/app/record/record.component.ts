import { MatTableModule } from '@angular/material/table';
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
  public users$;

  constructor(private afs: AngularFirestore){}

  ngOnInit(){
    this.users$ = this.afs.collection('recentUsers').valueChanges();
  }
}
