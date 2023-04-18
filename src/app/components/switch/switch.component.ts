import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tw-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input()
  public label!: String

  @Output()
  public OnSelectionChange = new EventEmitter<Boolean>;

  public selected: Boolean = false;

  public Change(): void {
    console.log(this.selected);
    this.OnSelectionChange.emit(this.selected);
  }

}
