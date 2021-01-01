import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { scan, switchMap, map, filter } from 'rxjs/operators'
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

export class RecordComponent{
  public readonly users$: Observable<User[]>;
  public readonly user$: Observable<User>;

  public _newUserId: BehaviorSubject<string> = new BehaviorSubject(null);
  private _userList: User[] = [];

  constructor(private db: AngularFirestore) {
    this.users$ = this._newUserId.pipe(
      filter((u) => !!u), // We don't want to work with null users
      switchMap((userId) => {
        return this.db.doc<User>(`users/${userId}`).valueChanges();
      }),
      map((user: User) => {
        this._userList.push(user);
        return this._userList;
      })
    );
  }

  receiveUserId(userId){
    this._newUserId.next(userId);
  }
}

/*export class RecordComponent {


  public readonly users$: Observable<User[]>; // Observable of type user array

  public readonly user$: Observable<User> // Observable of type user

  private readonly _userList: Subject<User>; // Subject _userList of type of user

  private readonly userDoc: AngularFirestoreDocument<User>; // AFS document of type user

  public userId: string // user's id as an observable
  
  constructor(private db: AngularFirestore) {
    
    this.userDoc = db.doc<User>(`users/${this.userId}`); // Given a firestore document id retrieve the document with this id and store it in userDoc
    this.user$ = this.userDoc.valueChanges(); // 

    this._userList = new Subject<User>(); // Make a new subject called _userList of type user

    this.users$ = this._userList.pipe(
      scan((userList:User[], newUser: User): User[] => [...userList, newUser], []) // Adds a user to the user list 
    );
  } 
  
  receiveUserId($qrResult){
    this.userId = $qrResult
  }

  public addUser(u: User): void{
    this._userList.next(u);
  }
}
*/