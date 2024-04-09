/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HF_API_URL: string
    readonly VITE_HF_QUERY_NOW: string
    readonly VITE_HF_QUERY_24H: string
    readonly VITE_HF_QUERY_7D: string
    readonly VITE_GEO_API_URL: string
    readonly VITE_HF_KEY: string
    readonly VITE_AMAP_IP_NAV_URL: string
    readonly VITE_AMAP_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }