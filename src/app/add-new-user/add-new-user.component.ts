import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { tap,first } from 'rxjs/operators';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';



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
  
  // wait for the form to be submited it and then send it
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

