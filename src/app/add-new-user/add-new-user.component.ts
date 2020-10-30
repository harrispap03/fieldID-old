import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})

export class AddNewUserComponent implements OnInit {
  myForm: FormGroup;

  loading = false;
  success = false;
  userId 
  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  // make the form 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: '',
      surname: '',
      idNum: '',
    })
  }
  
  // wait for the form to be submited it and then send it to the server
  async submitHandler(){
    this.loading = true;

    const formValue = this.myForm.value;
    
    try {
      await this.afs.collection('users').add(formValue).then(value => this.userId = value.id)
      this.success = true;
      this.myForm.reset();
      
    } catch(err){
      console.error(err)
    }
    
    this.loading = false;
  
  }
  
  
}

