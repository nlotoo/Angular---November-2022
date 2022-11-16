import { Component, EventEmitter, Input, Output } from '@angular/core';



export interface ICustomEvent {
  test: number
}
@Component({
  selector: 'app-lec-componets-list-user',
  templateUrl: './lec-componets-list-user.component.html',
  styleUrls: ['./lec-componets-list-user.component.css']
})
export class LecComponetsListUserComponent {

  constructor() { }

  @Input() userList!: { name: string; age: number }
  @Input() showCase!: boolean;

  @Input() StaticString!: string


  // output -> interface


  @Output() customEvent = new EventEmitter<ICustomEvent>()


  selectClickHandler() {
    this.customEvent.emit({ test: 123 })
  }



}
