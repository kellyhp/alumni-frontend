// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { NEXT_URL } from "next/dist/client/components/app-router-headers";
import { z } from "zod";

export const env = createEnv({
    server: {
        GOOGLE_ID: z.string(),
        GOOGLE_SECRET: z.string(),
        NEXTAUTH_URL: z.string(),
        NEXTAUTH_SECRET: z.string()
    },
    client: {
        
    },
    runtimeEnv: {
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    },
});
