import { UserService } from './../registration/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  public loading = false;

  auth;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;

    this.auth = {
      first_name: '',
      surname: '',
      last_name: '',
      town: '',
      state_of_origin: '',
      local_government_area: '',
      currentDate: Date.now(),
    }
    this.userService.getUser().subscribe(
        data => {
        this.auth.first_name = data.first_name;
        this.auth.surname = data.surname;
        this.auth.last_name = data.last_name;
        this.auth.town = data.town;
        this.auth.state_of_origin = data.state_of_origin;
        this.auth.local_government_area = data.local_government_area;
        this.loading = false;

      },
        err => {
          console.log("Error occured.")
          this.loading = false;

        }
      );
  }


}
