import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        routerLink: '/trang-chu'
      },
      {
        label: 'Dịch vụ chở khách đi các tỉnh',
        icon: 'pi pi-car',
      },
      {
        label: 'Dịch vụ đưa đón',
        icon: 'pi pi-sort-alt',
        items: [
          {
            label: 'Dịch vụ đưa đón sân bay',
            icon: 'pi pi-send',
          },
          {
            label: 'Dịch vụ đưa đón bệnh viện',
            icon: 'pi pi-plus',
          },
          {
            label: 'Đưa đón mua bán bất động sản',
            icon: 'pi pi-table',
          }
        ],
      },
      {
        label: 'Giới thiệu bất động sản',
        icon: 'pi pi-window-maximize',
        items: [
          {
            label: 'Đức Hoà',
            icon: 'pi pi-map-marker',
          },
          {
            label: 'Lâm Đồng',
            icon: 'pi pi-map-marker',
          },
          {
            label: 'Nơi khác',
            icon: 'pi pi-map',
          },
        ],
      },
      {
        label: 'Tiện ích trang web',
        icon: 'pi pi-th-large',
        items: [
          {
            label: 'Danh sách tỉnh thành Việt Nam',
            icon: 'pi pi-share-alt',
            routerLink: 'cho-khach-lien-tinh'
          },
          {
            label: 'Bảng giá ngoại tệ',
            icon: 'pi pi-chart-line',
            routerLink: 'tien-ich/chuyen-doi-tien-te'
          },
          {
            label: 'Tra cứu thông tin biển số xe',
            icon: 'pi pi-list',
            items: [
              {
                label: 'Xe máy',
                icon: 'fa-solid fa-motorcycle',
              },
              {
                label: 'Ôtô',
                icon: 'pi pi-car',
              },
            ],
          },
        ],
      },
    ];
  }

}
