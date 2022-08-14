import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h2>
            Welcome {{name}}
            </h2>
            <h2>{{2+2}}</h2>
            <h2>{{"Welcome " + name}}</h2>
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <h2>{{greetUser()}}</h2>
           <!--  <h2>{{a=2+2}}</h2> // won't work-->
           <!-- <h2>{{window.location.href}}</h2> // won't work -->
           <h2>{{siteUrl}}</h2>
            `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = "codevolution";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }


  greetUser(){
    return "Hello with methods from component class" + this.name;
  }

}
