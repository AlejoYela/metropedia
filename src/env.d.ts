/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly URL_COMPLEMENT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }