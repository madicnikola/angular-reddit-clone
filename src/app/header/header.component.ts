import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;

  // private authService: AuthService,
  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    // this.authService.username.subscribe((data: string) => this.username = data);
    // this.isLoggedIn = this.authService.isLoggedIn();
    // this.username = this.authService.getUserName();
  }

  goToUserProfile() {
    // this.router.navigateByUrl('/user-profile/' + this.username);
  }

  logout() {
    // this.authService.logout();
    // this.isLoggedIn = false;
    // this.router.navigateByUrl('');
  }
}
