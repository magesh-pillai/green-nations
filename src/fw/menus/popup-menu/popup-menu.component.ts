import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { MenuItem } from "../../services/menu.types";

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {
  @Input() menu: Array<MenuItem>;
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
