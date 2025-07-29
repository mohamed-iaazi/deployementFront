import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatProgressBar} from '@angular/material/progress-bar';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;
  login: boolean=localStorage.getItem("authToken")!=null;

  openMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private router: Router) {}



  logout() {
    // Clear any tokens or session storage
    localStorage.removeItem('authToken');
    // Redirect to login
    this.router.navigate(['/login']);
  }

}
