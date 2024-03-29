import { Component, signal } from '@angular/core';
import Swal from 'sweetalert2';
import { IListItens } from '../../../../interfaces/IListItens';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { InputListItemComponent } from '../../components/input-list-item/input-list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent, InputListItemComponent],
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

  public listItemsStage(value: 'pending' | 'completed') {
    return this.getListItens().filter((item) => {
      if (value === 'pending') {
        return !item.checked
      } if (value === 'completed') {
        return item.checked
      }
      return item;
    })
  }

  public deleteAllItens() {
    Swal.fire({
      title: "Tem certeza?",
      text: "Não será possível reverter a ação!!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2fbf71",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar tudo!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("@my-list")
        this.getListItens.set([])
      }
    });

  }

  public deleteItem(ItemToDelete: { value: string }) {
    const newList = this.getListItens().filter(item => item.value !== ItemToDelete.value)
    this.getListItens.set(newList)
    localStorage.setItem("@my-list", JSON.stringify(newList))
  }

  public updateItemCheckbox(newItem: { checked: boolean, id: string }) {
    this.getListItens.update((oldValue: IListItens[]) => {
      return oldValue.filter((item) => {
        if (item.value === newItem.id) {
          item.checked = newItem.checked;
          return item;
        }
        return item;
      });
    })
    return localStorage.setItem("@my-list", JSON.stringify(this.getListItens()))
  }

  public updateItemText(newItem: { value: string, id: string }) {
    console.log(newItem.id, newItem.value)
    this.getListItens.update((oldValue: IListItens[]) => {
      // console.log("old", oldValue, "new", newItem)
      return oldValue.filter((item) => {
        if (item.value === newItem.id) {
          const index = oldValue.indexOf(item)
          oldValue[index].value = newItem.value;
        }
        return item;
      });
    })

    return localStorage.setItem("@my-list", JSON.stringify(this.getListItens()))
  }
}