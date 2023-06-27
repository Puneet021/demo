import { IContactUsData } from "./contact-us.model";
import { IMenuItems } from "./menu.model";

export interface IStore {
  menu: {
    menuItems: IMenuItems[];
  };

  contactUs: {
    contactUsData: IContactUsData[];
    loader: boolean;
  };
}
