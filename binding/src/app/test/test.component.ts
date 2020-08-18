import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success">
      Welcome {{name}}
    </h2>
    <h2 [class]="successClass">
      Codevolution
    </h2>
    <h2 class="text-special" [class]="successClass">
      Codevolution
    </h2>  
    <h2 [class.text-danger]="hasError">
      Codevolution
    </h2>    
    <h2 [ngClass]="messageClasses">
      Codevolution
    </h2>    
    <input [id]="myId" type="text" value="Vishwas">
    <input [disabled]="isDisabled" id={{myId}} type="text" value="Vishwas">
    <input bind-disabled="isDisabled" id={{myId}} type="text" value="Vishwas">
  
  `,
  styles: [`
    .text-success {
      color: green;      
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public myId = "testId";
  public isDisabled = true;
  public hasError = false;
  public successClass = "text-success";

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
