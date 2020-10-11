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
  
  ngAfterViewInit() {
    this.delayAndTryHarder();
   }

 async delayAndTryHarder() {
     await this.delay(1000);
     this.toggleTryHarder();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
 }

  onScanSuccess(result: string){
    this.result = result
  }

}
