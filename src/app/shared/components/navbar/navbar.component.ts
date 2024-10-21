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
                routerLink: ['/auth']
            },
            {
                label: 'Basic',
                routerLink: ['/reactive/basic']
            },
            {
                label: 'Dynamic',
                routerLink: 'reactive/dynamic'

            },
            {
                label: 'Switches',
                 routerLink: 'reactive/switches'

            },

        ];
    }
}
