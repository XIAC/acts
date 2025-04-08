import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsistenteComponent } from './asistente/asistente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AsistenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-online';
}
