"use client";

import { Client, Account } from "appwrite";

export const client = new Client();

if (typeof window !== "undefined") {
  client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);
}

export const account = new Account(client);
export { ID } from "appwrite";
