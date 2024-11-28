import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "@/slices/UserSlice";
import CartSlice from "@/slices/CartSlice";
import reloadSlice  from "@/slices/ReloadSlice";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: CartSlice,
    reload: reloadSlice,
  },
});
