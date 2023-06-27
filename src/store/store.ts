import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";
import contactUsSlice from "./contact-us/contactUsSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,

    contactUs: contactUsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
