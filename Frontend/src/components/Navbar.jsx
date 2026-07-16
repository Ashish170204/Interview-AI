import { Link, useLocation } from "react-router";
import {
  RocketIcon,
  BookOpenIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { UserButton } from "@clerk/react";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b border-emerald-900/40 bg-slate-950/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-emerald-400"
        >
          <RocketIcon className="w-8 h-8" />
          <span>Interview Prep</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* DSA Problems */}
          <Link
            to="/problems"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              isActive("/problems")
                ? "bg-emerald-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
            }`}
          >
            <BookOpenIcon size={18} />
            <span className="hidden sm:block">DSA Problems</span>
          </Link>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              isActive("/dashboard")
                ? "bg-emerald-600 text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400"
            }`}
          >
            <LayoutDashboardIcon size={18} />
            <span className="hidden sm:block">Dashboard</span>
          </Link>

          {/* User */}
          <div className="ml-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;







// import { Link, useLocation } from "react-router";
// import {
//   BookOpenIcon,
//   LayoutDashboardIcon,
//   SparklesIcon,
//   BotIcon,
// } from "lucide-react";
// import { UserButton } from "@clerk/react";

// function Navbar() {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           to="/"
//           className="group flex items-center gap-3 hover:scale-105 transition-transform duration-200"
//         >
//           <div className="size-10 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
//             <SparklesIcon className="size-6 text-white" />
//           </div>

//           <div className="flex flex-col">
//             <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
//               Interview Prep
//             </span>

//             <span className="text-xs text-base-content/60 font-medium -mt-1">
//               Learn Together
//             </span>
//           </div>
//         </Link>

//         {/* NAVIGATION */}
//         <div className="flex items-center gap-1">
//           {/* PROBLEMS PAGE LINK */}
//           <Link
//             to="/problems"
//             className={`px-4 py-2.5 rounded-lg transition-all duration-200
//               ${
//                 isActive("/problems")
//                   ? "bg-primary text-primary-content"
//                   : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
//               }`}
//           >
//             <div className="flex items-center gap-x-2.5">
//               <BookOpenIcon className="size-4" />
//               <span className="font-medium hidden sm:inline">
//                 Problems
//               </span>
//             </div>
//           </Link>

//           {/* DASHBOARD PAGE LINK */}
//           <Link
//             to="/dashboard"
//             className={`px-4 py-2.5 rounded-lg transition-all duration-200
//               ${
//                 isActive("/dashboard")
//                   ? "bg-primary text-primary-content"
//                   : "hover:bg-base-200 text-base-content/70 hover:text-base-content"
//               }`}
//           >
//             <div className="flex items-center gap-x-2.5">
//               <LayoutDashboardIcon className="size-4" />
//               <span className="font-medium hidden sm:inline">
//                 Dashboard
//               </span>
//             </div>
//           </Link>

//           {/* USER BUTTON */}
//           <div className="ml-4 mt-2">
//             <UserButton />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;