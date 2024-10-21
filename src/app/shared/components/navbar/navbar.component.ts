import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  title = 'formsApp';

   ngOnInit() {
        this.items = [
            {
                label: 'Auth',
                routerLink: ['/auth/sign-up'],
                routerLinkActiveOptions: {exact:true}
            },
            {
                label: 'Basic',
                routerLink: ['/reactive/basic'],
                routerLinkActiveOptions: {exact:true}
            },
            {
                label: 'Dynamic',
                routerLink: 'reactive/dynamic',
                routerLinkActiveOptions: {exact:true}

            },
            {
                label: 'Switches',
                 routerLink: 'reactive/switches',
                 routerLinkActiveOptions: {exact:true}

            },

        ];
    }
}
