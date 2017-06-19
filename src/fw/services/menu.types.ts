export interface MenuItem {
    text: string;
    icon: string;
    route: string;
    submenu: Array<MenuItem>;
};