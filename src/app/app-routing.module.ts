import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { HomeComponent } from './home/home.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { RecordComponent } from './record/record.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '/home', component: HomeComponent},
  { path: '/qrscanner', component: QrScannerComponent},
  { path: 'newuser', component: AddNewUserComponent},
  { path: 'record', component: RecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
