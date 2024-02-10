import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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
