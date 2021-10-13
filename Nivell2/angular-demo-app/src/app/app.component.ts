import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public values: string = '';
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public containerQr:string = "";
  public background: string = "white";
  public backgroundAlpha:number = 1;
  public foreground: string= "black";
  public foregroundAlpha:number = 1;



  constructor() {
    this.level = "L";
    this.values = "QR code string value";
    this.width = 200;
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }

  qrBackground(val: string) {
    this.background = val;
  }

  qrBackgroundAlpha(val: number) {
    this.backgroundAlpha = val;
  }

  qrForeground(val: string) {
    this.background = val;
  }

  qrForegroundAlpha(val: number) {
    this.foregroundAlpha = val;
  }


  hide(){
    this.containerQr="d-none";
  }
  show(){
    this.containerQr="";
  }


}
