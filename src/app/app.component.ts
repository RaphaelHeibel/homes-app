import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // templateUrl: './app.component.html',
  template: `
    <main>
  <header class="brand-name">
    <img
      src="../assets/logo.svg"
      alt="logo"
      class="brand-logo"
      aria-hidden="true"
    />
  </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>
    `,
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterModule, HomeComponent]
})
export class AppComponent {
  title = 'homes-app';
}
