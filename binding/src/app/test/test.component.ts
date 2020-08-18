import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 [style.color]="'orange'">Style Binding</h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding Conditional</h2>
  
    <h2 [style.color]="highlightColor">Style Binding 2: Property Bond</h2>

    <h2 [ngStyle]="titleStyles">Style Binding 3: Styles</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public myId = "testId";
  public isDisabled = true;
  public hasError = true;
  public successClass = "text-success";

  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

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
