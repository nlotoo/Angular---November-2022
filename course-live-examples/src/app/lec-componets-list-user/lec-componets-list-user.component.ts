import { Component, Input } from '@angular/core';

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

}
