import { Component, OnInit } from '@angular/core';


declare const $: any;

declare interface RouteInfo
{
  path:string;
  title:string;
  icon:string;
  class:string;
}
export const ROUTES:RouteInfo[]=[
  { path: 'datasecuritydatacapture', title: 'Data Security Data Capture',  icon: 'pe-7s-graph', class: '' },
  { path: 'cartscreen', title: 'Cart Screen',  icon:'pe-7s-user', class: '' },
  { path: 'creditcardowner', title: 'Credit Card Owner',  icon:'pe-7s-note2', class: '' },
  { path: 'customersupportmanager', title: 'Customer Support Manager',  icon:'pe-7s-news-paper', class: '' }
  

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.css']
  
})
export class SidebarComponent implements OnInit {
  menuItems:any[];
  constructor() { }

  ngOnInit() {
    this.menuItems=ROUTES.filter(menuItems=>menuItems);
  }


}
