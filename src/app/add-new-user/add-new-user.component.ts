import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {
  myForm: FormGroup;
  userId: string;
  qrCodeCreated = false;
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) {}

  // make the form
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      surname: '',
      idNum: '',
    });
  }

  // wait for the form to be submited and then add the user to the db
  async onSubmit() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      await this.afs
        .collection('users')
        .add(formValue)
        .then((user) => (this.userId = user.id));
      this.success = true;
    } catch (err) {
      console.error(err);
    }
    
    this.loading = false;
    this.qrCodeCreated = true;
    this.myForm.reset();
  }
}
