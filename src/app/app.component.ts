import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvalidDataComponent } from './invalid-data/invalid-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvalidDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PocAdminUI';
}
