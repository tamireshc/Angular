import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItens } from '../../../../interfaces/IListItens';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss',
})
export class InputListItemComponent {
  @Input({ required: true }) public inputListItens: IListItens[] = [];
  @Output() public outputUpdateItemCheckbox = new EventEmitter<{
    checked: boolean;
    id: string;
  }>();

  public updateItemCheckbox(checked: boolean, id: string) {
    return this.outputUpdateItemCheckbox.emit({ checked, id })
  }

  @Output() public outputUpdateItemText = new EventEmitter<{
    value: string;
    id: string;
  }>();

  public updateItemText(value: string, id: string) {
    return this.outputUpdateItemText.emit({ value, id })
  }

  @Output() public outputDeleteItem = new EventEmitter<{
    value: string;
  }>();

  public deleteItem(value: string) {
    return this.outputDeleteItem.emit({ value })
  }

}
