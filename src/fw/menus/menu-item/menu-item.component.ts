import { Component, Input, OnInit, HostBinding, 
  HostListener, ElementRef, Renderer } from '@angular/core';
import { MenuItem } from "../../services/menu.types";
import { MenuService } from "../../services/menu.service";
import { Router } from "@angular/router";

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item =  <MenuItem>null;
  @HostBinding('class.parent-is-popup')
  @Input() 
  parentIsPopup = true;
  isActiveRoute = false;
  
  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private router:Router,
              private menuService: MenuService,
              private el: ElementRef,
              private renderer: Renderer) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick(event) : void {
    event.stopPropagation();

    if (this.item.submenu) {
      this.mouseInPopup = !this.mouseInPopup;
    } else if (this.item.route) {
      // force horizontal menus to close by sending a mouseleave event
      let newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this.renderer.invokeElementMethod(
        this.el.nativeElement, 'dispatchEvent', [newEvent]);
      this.router.navigate(['/' + this.item.route]);
    }
  }

  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() : void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }
}
