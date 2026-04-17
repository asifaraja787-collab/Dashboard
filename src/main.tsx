import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { SidebarProvider } from "@/components/ui/sidebar"

import { AppSidebar } from "./components/app-sidebar";
import "./index.css"
import App from "./App.js"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      
      <SidebarProvider>
      <AppSidebar />
      <App />
      
    </SidebarProvider>
      
    </ThemeProvider>
  </StrictMode>
    
)
