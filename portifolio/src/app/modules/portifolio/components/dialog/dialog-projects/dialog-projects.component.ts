import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/IProjects';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: IProjects) {
  }
  ngOnInit(): void {
    this.getData.set(this.data)

  }
  public getData = signal<IProjects | null>(null);

  public closeModal() {
    return this._dialogRef.close()
  }
}
