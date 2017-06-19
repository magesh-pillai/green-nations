import { Injectable } from '@angular/core';
import { MenuItem } from "./menu.types";

@Injectable()
export class MenuService {
    items: Array<MenuItem>;
    isVertical = false;
    showingLeftSideMenu = false;

    toggleLeftSizeMenu() : void {
        this.isVertical = true;
        this.showingLeftSideMenu = !this.showingLeftSideMenu;
    }

    toggleMenuOrientation() {
        this.isVertical = !this.isVertical;
    }
}
