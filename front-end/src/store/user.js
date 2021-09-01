import create from "zustand";
import { persist } from "zustand/middleware";
import authService from "../services/auth";

const initialUserValue = {
  lastName: "",
  firstName: "",
  token: null,
};

// For user store we use persist middleware in order to preserve data between
const useUserStore = create(
  persist(
    (set, get) => ({
      user: initialUserValue,
      setUser: (data) =>
        set({
          user: {
            lastName: data.lastName,
            firstName: data.firstName,
            token: data.token,
          },
        }),
      signIn: async (params) => {
        try {
          const response = await authService.signIn(params);

          console.log(response);
          if (response.data !== null) {
            // Update current zustand store
            set({
              user: {
                lastName: response.data.lastName,
                firstName: response.data.firstName,
                token: response.data.token,
              },
            });
          }

          return response;
        } catch (err) {
          throw err;
        }
      },
      signOut: async () => {
        set({
          user: initialUserValue,
        });
      },
    }),
    {
      name: "user",
    }
  )
);

export default useUserStore;
