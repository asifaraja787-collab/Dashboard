import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Add your logo or title here */}
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        {/* Add your sidebar navigation items here */}
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
            Home
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
            About
          </a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-accent">
            Settings
          </a>
        </nav>
      </SidebarContent>
      <SidebarFooter>
        {/* Add footer content here */}
        <p className="text-sm text-muted-foreground">© 2026</p>
      </SidebarFooter>
    </Sidebar>
  )
}
