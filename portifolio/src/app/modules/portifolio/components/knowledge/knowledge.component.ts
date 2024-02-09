import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interfaces/Iknowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "html5"
    },
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "angular"
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "css3"
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "javascrip"
    },
    {
      src: "assets/icons/knowledge/nodejs.svg",
      alt: "nodejs"
    }
  ])

}
