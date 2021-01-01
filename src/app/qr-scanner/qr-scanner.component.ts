import { Component } from '@angular/core';
import { QrService } from '../qr.service';


@Component({  
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent {
  qrResult: string 
  error: string
  
  
  constructor(public qrService: QrService) {
    
  }

  onScanSuccess(qrResult: string){
    this.qrResult = qrResult
    this.qrService.addNewUserToList(qrResult)
  }
  
  

  
  

  
  Error(e: Event) {
    this.error = "Cameras not found"
  }
}

