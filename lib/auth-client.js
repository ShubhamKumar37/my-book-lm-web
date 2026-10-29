
import { createAuthClient } from "better-auth/react";

const authBaseURL = `${process.env.NEXT_PUBLIC_AUTH_URL}/api/auth`;

export const authClient = createAuthClient({
  baseURL: authBaseURL,
  fetchOptions: {
    credentials: "include",
  },
});
