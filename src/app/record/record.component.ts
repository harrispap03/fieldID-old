import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { scan, switchMap, map } from 'rxjs/operators'
//import { MatTableModule } from '@angular/material/table';

export interface User {  
  idNum: number;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent {

  public readonly users$: Observable<User[]>; // variable users$ which is an array observable of type user

  public readonly user$: Observable<User> // Observable of type user

  private readonly _userList: Subject<User>; // Subject _userList of type of user

  private readonly userDoc: AngularFirestoreDocument<User>; // AFS document of type user

  private readonly userId = 'D7txRm9FLefmcoABWJgf'; // That id will change dynamically once I get the scanner to work
  
  constructor(private db: AngularFirestore) {
    
    this.userDoc = db.doc<User>(`users/${this.userId}`); // Given a firestore document id retrieve the document with this id and store it in userDoc
    this.user$ = this.userDoc.valueChanges(); // 

    this._userList = new Subject<User>(); // Make a new subject called _userList of type user

    this.users$ = this._userList.pipe(
      scan((userList:User[], newUser: User): User[] => [...userList, newUser], []) // Adds a user to the user list 
    );

   
  } 
  
  public addUser(u: User): void{
    this._userList.next(u);
  }
}
