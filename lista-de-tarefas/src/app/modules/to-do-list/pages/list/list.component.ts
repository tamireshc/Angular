import { Component, signal } from '@angular/core';
import { IListItens } from '../../../../interfaces/IListItens';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true)

  public getListItens = signal<IListItens[]>(JSON.parse(localStorage.getItem("@my-list") || "[]"))

  public getInputAndAddItem(value: IListItens) {
    let setListItens = <IListItens[]>(JSON.parse(localStorage.getItem("@my-list") || "[]"))
    localStorage.setItem("@my-list", JSON.stringify([...setListItens, value]))
    this.getListItens.set(JSON.parse(localStorage.getItem("@my-list") || "[]"))
  }
  public deleteAllItens() {
    localStorage.removeItem("@my-list")
    this.getListItens.set([])
  }
}
