import { Component, OnInit } from '@angular/core';
@Component({  
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent implements OnInit {
  scannerEnabled = true;
  result: string
  error: string
  camFound: string
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
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
