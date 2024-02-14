import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `1<router-outlet />2<p>teste</p>`
})
export class AppComponent {
  title = 'lista-de-tarefas';
}
