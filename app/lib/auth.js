import { env } from "app/env.mjs";
import GoogleProvider from "next-auth/providers/google";

export const config = {
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_ID,
            clientSecret: env.GOOGLE_SECRET,
        }),
    ],
};