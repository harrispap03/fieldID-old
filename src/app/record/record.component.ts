import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
  public readonly user$: Observable<User>;

  private readonly userId = 'D7txRm9FLefmcoABWJgf'; // That id will change dynamically once I get the scanner to work
  private readonly userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc<User>(`users/${this.userId}`);
    this.user$ = this.userDoc.valueChanges();
  }
  Array= [ 1,2,3]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = Array;
}

 