import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {LoginComponent} from './auth/login/login';
import {RegisterComponent} from './auth/register/register';
import {Home} from './home/home';
import {Navbar} from './shared/navbar/navbar';
import {FooterComponent} from './shared/footer/footer';
import {QuestionDetail} from './questions/question-detail/question-detail';
import {ProjectList} from './projects/project-list/project-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem('authToken') !== null) {
      // If the token exists, redirect to the home route (or any other route you prefer)
      this.router.navigate(['/home']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
  protected title = 'frontend';

  constructor(private router: Router) {

  }


}
