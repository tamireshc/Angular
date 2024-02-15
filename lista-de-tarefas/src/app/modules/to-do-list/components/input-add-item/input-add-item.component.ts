import { JsonPipe, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { IListItens } from '../../../../interfaces/IListItens';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [JsonPipe, NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef)

  @ViewChild("inputText") public inputText!: ElementRef

  @Input({ required: true }) public inputListItens: IListItens[] = []

  @Output() public outputAddListItens = new EventEmitter<{ checked: boolean, value: string }>()

  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges()
      this.inputText.nativeElement.value = ""
      this.outputAddListItens.emit({
        checked: false,
        value
      })
      return this.inputText.nativeElement.focus()
    }
  }
}
