import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component'; // Assuming this is the correct import path for the CarruselComponent
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , FooterComponent , CarruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dulce_Lucesita';
}
