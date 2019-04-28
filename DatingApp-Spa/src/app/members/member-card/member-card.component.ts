import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  constructor(private authService: AuthService, private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.toastr.success('You have liked: ' + this.user.knownAs);
    }, error => {
      this.toastr.error(error);
    });
  }
}

