import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

import {MatListItem, MatNavList} from '@angular/material/list';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    RouterLink,
    MatSidenav,
    RouterLinkActive,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatTooltip,
    RouterOutlet
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router: Router) {}

  logout() {
    // Clear token/session, etc.
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']).then(r =>{

    });
  }
}
