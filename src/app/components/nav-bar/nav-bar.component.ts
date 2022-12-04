import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `<nav class="nav">
    <button class="btn nav-item" routerLink="/dev" routerLinkActive="active" ariaCurrentWhenActive="page">Dev</button>
    <button class="btn nav-item" routerLink="/chuck" ariaCurrentWhenActive="page">Chuck</button>
    <button class="btn nav-item" routerLink="/form" ariaCurrentWhenActive="page">Form</button>
</nav>`,
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor() { }

}
