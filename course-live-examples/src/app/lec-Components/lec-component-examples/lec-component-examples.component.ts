import { Component, OnInit } from '@angular/core';
import { ICustomEvent } from 'src/app/lec-componets-list-user/lec-componets-list-user.component';


@Component({
  selector: 'app-lec-component-examples',
  templateUrl: './lec-component-examples.component.html',
  styleUrls: ['./lec-component-examples.component.css']
})
export class LecComponentExamplesComponent implements OnInit {

  constructor() { }

  // interpolation
  msg = "hello world"

  // #
  title = 'promo'
  ChangeTitle(titleInput: string) {
    this.title = titleInput;
  }



  showCase = false

  userlist = [{
    "name": "pesho",
    "age": 20,
  },
  {
    "name": "Ivan",
    "age": 18,
  }
  ];


  Static = "iamstatic"

  handleClickEvent() {
    this.showCase = !this.showCase
    console.log('clicked')
  };

  selectedIndex() {
    console.log('clicked')

  }


  customEventHandler($event:ICustomEvent) {
    console.log($event);
    console.log('asd')
  }




  ngOnInit(): void {

  }

}
