import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css',
})
export class ChildAComponent {}
