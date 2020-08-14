import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Vishwas">
    <input [disabled]="isDisabled" id={{myId}} type="text" value="Vishwas">
    <input bind-disabled="isDisabled" id={{myId}} type="text" value="Vishwas">
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Vishwas";
  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
