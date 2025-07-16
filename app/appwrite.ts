"use client";

import { Client, Account } from "appwrite";

export const client = new Client();

if (typeof window !== "undefined") {
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

  if (endpoint && project) {
    client.setEndpoint(endpoint).setProject(project);
  } else {
    console.warn("Appwrite environment variables are missing.");
  }
}

export const account = new Account(client);
export { ID } from "appwrite";
