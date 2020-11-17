import { Component, NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({  
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent {
  scannerEnabled = true;
  result: string
  error: string
  camFound: string
  
  constructor() { }
  
  camerasNotFound(e: Event) {
    this.error = "Cameras not found"
  }

  cameraFound(e: Event) {
    this.camFound = "Camera found"
  }

  onScanSuccess(result: string){
    this.result = result
  }
}
