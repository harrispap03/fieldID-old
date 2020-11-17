import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({  
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent {
  result: string
  error: string

  camerasNotFound(e: Event) {
    this.error = "Cameras not found"
  }
  onScanSuccess(result: string){
    this.result = result
  }
}
