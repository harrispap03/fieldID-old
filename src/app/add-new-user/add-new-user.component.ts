import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { tap,first } from 'rxjs/operators'

interface User{
  name?: string;
  surname?: string;
  id?: string;
}

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  myForm: FormGroup;

  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      surname: '',
      idNum: ''
    })

  }

  async submitHandler(){
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs.collection('users').add(formValue);
      this.success = true;
    } catch(err){
      console.error(err)
    }
    
    this.loading = false;
  }


}
