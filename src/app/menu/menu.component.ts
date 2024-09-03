import { Component } from '@angular/core';

export interface ISiteMenu {
  siteMenuId: number;
  siteMenuTitle: string;
}


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

 

  navMenuItems1: ISiteMenu[] = [
    {siteMenuId: 1, siteMenuTitle: 'Menu 1'},
    {siteMenuId: 2, siteMenuTitle: 'Menu 2'},
    {siteMenuId: 3, siteMenuTitle: 'Menu 3'},
  ];


  itemSiteMenuClicked(menu1Item: ISiteMenu): void {

    console.log(">===>> "+'Menu Item clicked: '+ menu1Item.siteMenuTitle )

  }

}
