import { createSlice } from "@reduxjs/toolkit";
import { IContactUsData } from "../../utils/models/contact-us.model";
import { IStore } from "../../utils/models/store.model";

const initialState: { contactUsData: IContactUsData[]; loader: boolean } = {
  contactUsData: [
    {
      name: "ABC",
      address:
        "abc jk city xyz",
      mobileNo: "+91 1234567890",
      email: "info@xyz.com",
      location:
        "https://www.google.com/maps/embed?Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1685506013799!5m2!1sen!2sin",
    },
  ],
  loader: false,
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: initialState,
  reducers: {},
});

export const getContactUsData = (state: IStore) =>
  state.contactUs.contactUsData;

export default contactUsSlice.reducer;
