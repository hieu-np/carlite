import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-speeddial',
  templateUrl: './speeddial.component.html',
  styleUrls: ['./speeddial.component.scss']
})
export class SpeeddialComponent implements OnInit {

  items: MenuItem[] = [];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
        this.items = [
            {
                icon: 'fa-brands fa-facebook-messenger',
                url: 'https://www.facebook.com/msg/cloudylovewind'
            },
            {
                icon: 'pi pi-facebook',
                url: 'https://www.facebook.com/cloudylovewind'
            },
            {
                // icon: 'pi pi-whatsapp',
                icon: 'pi pi-whatsapp',
                url: 'https://zalo.me/0355013360'
            },
            {
                icon: 'pi pi-phone',
                url: 'tel:0355013360'
            },
            // {
            //     icon: 'pi pi-external-link',
            //     url: 'http://angular.io'

            // }
        ];
    }

}
