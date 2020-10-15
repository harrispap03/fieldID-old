import { Component, OnInit } from '@angular/core';
@Component({  
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})

export class QrScannerComponent implements OnInit {
  scannerEnabled = true;
  result: string
  tryHarder
  
  constructor() { }

  ngOnInit(): void {
  }
  
  

  onScanSuccess(result: string){
    this.result = result
  }

}
