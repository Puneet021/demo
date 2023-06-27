import { createSlice } from "@reduxjs/toolkit";
import { IMenuItems } from "../../utils/models/menu.model";

const initialState: { menuItems: IMenuItems[] } = {
  menuItems: [
    {
      id: 0,
      name: "Home",
      path: "./home",
    },
    {
      id: 1,
      name: "About Us",
      path: "./about",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "./contact-us",
    },
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {},
});

export default menuSlice.reducer;
