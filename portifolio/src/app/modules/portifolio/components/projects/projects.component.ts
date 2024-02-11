import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: 'dialog-container'
    })
  }
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'vfull',
      width: "100px",
      heigth: "51px",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      links: [
        {
          name: "conheça o blog",
          href: "XXXXXXXXXXXXXXXXXXXXXXX"
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'vfull',
      width: "100px",
      heigth: "51px",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      links: [
        {
          name: "conheça o blog",
          href: "XXXXXXXXXXXXXXXXXXXXXXX"
        }
      ]
    },
  ])

}
