
// // import { useState, useEffect } from "react"
// // import { SidebarTrigger } from "@/components/ui/sidebar"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // import { Bell, Search, HelpCircle } from "lucide-react"

// // const Nav = () => {
// //   const [darkMode, setDarkMode] = useState(false)

// //   useEffect(() => {
// //     document.documentElement.classList.toggle("dark", darkMode)
// //   }, [darkMode])

// //   return (
// //     <nav className="bg-white dark:bg-gray-900 border-b px-4 py-3">
// //       <div className="flex items-center justify-between w-full">

      
    
// //         <div className="flex items-center gap-4">
// //           <SidebarTrigger />
// //           <h1 className="text-lg font-semibold">Dashboard</h1>
// //         </div>

// //         <div className="flex items-center gap-4">

         
// //           <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
// //             <Search size={18} />
// //           </button>

        
// //           <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
// //             <HelpCircle size={18} />
// //           </button>

          
// //           <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative">
// //             <Bell size={18} />
           
// //             <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
// //           </button>

          
// //           <button
// //             onClick={() => setDarkMode(!darkMode)}
// //             className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
// //           >
// //             {darkMode ? "Light" : "Dark"}
// //           </button>

   
  
// //           <div className="flex items-center gap-2">
// //             <Avatar className="w-9 h-9">
// //               <AvatarImage src="/girl1.jpeg" />
// //               <AvatarFallback>AS</AvatarFallback>
// //             </Avatar>
// //             <span className="text-sm font-medium">User</span>
// //           </div>

// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Nav

// "use client"

// import { useState, useEffect } from "react"
// import { SidebarTrigger } from "@/components/ui/sidebar"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Bell, Search, HelpCircle } from "lucide-react"

// const Nav = () => {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode)
//   }, [darkMode])

//   return (
//     <nav className="w-full bg-white dark:bg-gray-900 border-b">
//       <div className="flex items-center justify-between px-4 md:px-6 py-3">

//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-4">
//           <SidebarTrigger />

//           <h1 className="text-lg font-semibold tracking-tight">
//             Dashboard
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-3 md:gap-4">

//           {/* SEARCH (input like reference) */}
//           <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
//             <Search size={16} className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent outline-none px-2 text-sm w-32 md:w-40"
//             />
//           </div>

//           {/* HELP ICON */}
//           <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <HelpCircle size={18} className="text-gray-600 dark:text-gray-300" />
//           </button>

//           {/* NOTIFICATION */}
//           <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
//             <Bell size={18} className="text-gray-600 dark:text-gray-300" />
//             <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>

//           {/* DARK MODE */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
//           >
//             {darkMode ? "Light" : "Dark"}
//           </button>

//           {/* USER PROFILE */}
//           <div className="flex items-center gap-2 pl-2 border-l">
//             <Avatar className="w-9 h-9">
//               <AvatarImage src="/girl1.jpeg" alt="user" />
//               <AvatarFallback>AS</AvatarFallback>
//             </Avatar>

//             <div className="hidden sm:flex flex-col leading-tight">
//               <span className="text-sm font-medium">user</span>
//               <span className="text-xs text-gray-500">Admin</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav
//"use client"

// import { Bell, Search, HelpCircle } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { SidebarTrigger } from "./ui/sidebar"

// export default function Nav() {
//   return (
//     <div className="w-full bg-white border-b px-6 py-3 flex items-center justify-between">

//       {/* LEFT */} <SidebarTrigger></SidebarTrigger>
//       <h1 className="text-lg font-semibold">Dashboard</h1>

//       {/* RIGHT */}
//       <div className="flex items-center gap-5">

//         {/* Search */}
//         <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
//           <Search size={16} className="text-gray-500" />
//           <input
//             className="bg-transparent outline-none px-2 text-sm w-36"
//             placeholder="Search..."
//           />
//         </div>

//         <HelpCircle size={18} className="text-gray-500 cursor-pointer" />

//         {/* Notification */}
//         <div className="relative">
//           <Bell size={18} className="text-gray-500 cursor-pointer" />
//           <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-2 border-l pl-4">
//           <Avatar className="w-9 h-9">
//             <AvatarImage src="/girl1.jpeg" />
//             <AvatarFallback>AS</AvatarFallback>
//           </Avatar>
//           <div className="text-sm">
//             <p className="font-medium">User1</p>
//             <p className="text-gray-400 text-xs">Admin</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }
"use client"

import { Bell, Search, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "./ui/sidebar"

export default function Nav() {
  return (
    <div className="w-full bg-white border-b px-4 md:px-6 py-3 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input
            className="bg-transparent outline-none px-2 text-sm w-32"
            placeholder="Search..."
          />
        </div>

        <HelpCircle size={18} className="text-gray-500 cursor-pointer" />

        {/* Notification */}
        <div className="relative">
          <Bell size={18} className="text-gray-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 border-l pl-4">
          <Avatar className="w-9 h-9">
            <AvatarImage src="/girl1.jpeg" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="text-sm hidden sm:block">
            <p className="font-medium">User1</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
        </div>

      </div>
    </div>
  )
}