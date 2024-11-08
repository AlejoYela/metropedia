/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly AUTH0_DOMAIN: string;
    readonly AUTH0_CLIENT_ID: string;
    readonly AUTH0_CLIENT_SECRET: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }