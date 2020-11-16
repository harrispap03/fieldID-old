import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators'
import { MatTableModule } from '@angular/material/table';

export interface User {  
  name: string;
  surname: string;
  idNum: number;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent {

  public readonly users$: Observable<User[]>;

  private readonly _userList: Subject<User>;

  currentDate = Date.now();

  public readonly user$: Observable<User>;

  private readonly userId = 'D7txRm9FLefmcoABWJgf'; // That id will change dynamically once I get the scanner to work
  private readonly userDoc: AngularFirestoreDocument<User>;

  constructor(private db: AngularFirestore) {
    this.userDoc = db.doc<User>(`users/${this.userId}`);
    this.user$ = this.userDoc.valueChanges();
  } 
}

 