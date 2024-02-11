import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
    {
      summary: {
        strong: 'Front-end',
        p: ' Set 2020 - Present',
      },
      text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </p>',
    },
  ])

}
