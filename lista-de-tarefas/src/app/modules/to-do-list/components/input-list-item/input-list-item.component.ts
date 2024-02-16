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

}
