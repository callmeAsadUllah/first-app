import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
