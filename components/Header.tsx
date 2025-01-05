"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User, Sun, Moon } from "lucide-react"; 
import {toast} from 'react-hot-toast';
import { useEffect, useState } from "react";
import Image from "next/image";


export default function Header() {
  const { data: session } = useSession(); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const isDark = storedTheme === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);


    const fetchUserProfilePic = async () => {
      try {
        const name = `${session?.user?.email?.charAt(0) ?? ''}${session?.user?.role?.charAt(0) ?? ''}`;
        console.log(name)
        const response = await fetch(`https://open-source-xi.vercel.app/api/profile-picture?name=${name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log(data.imageUrl);
        setProfilePic(data?.imageUrl || null);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfilePic();
  }, [session?.user?.email , session]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    toast.success("Theme Changed");
  };


  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully"); 
    } catch {
      toast.error("Failed to sign out");
    }
  };

  return (
    <div className="navbar bg-gray-50 dark:bg-gray-900 sticky top-0 z-40 dark:text-gray-200 text-gray-800">
      <div className="container mx-auto">
        <div className="flex-1 px-2 lg:flex-none">
          <Link
            href="/"
            className="flex  justify-center items-center text-xl gap-2  normal-case font-bold  "
            prefetch={true} 
          >
            <Image 
                src={'https://res.cloudinary.com/dbqq41bpc/image/upload/v1736060810/logo_outqnc.jpg'} 
                 width={1000} 
                 height={1000}
                  alt="register image" 
                  className="w-8 h-8 rounded-full mx-auto "/>
                  
           <p >Digital Asset</p> 
          </Link>
        </div>
        
        <div className="flex flex-1 justify-end px-2">
           {/* Dark Mode Toggle */}
           <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button> 
          <div className="flex items-stretch gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                {profilePic ? <Image src={profilePic} width={500} height={500} alt="profile" className= "w-5 h-5 rounded-full shadow-md" /> : <User className="w-5 h-5" />}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow-lg bg-gray-100 dark:bg-base-100 rounded-box w-64 mt-4 py-2"
              >
                {session ? (
                  <>
                    <li className="px-4 py-1">
                      <span className="text-sm opacity-70">
                        {session.user?.email?.split("@")[0]}
                      </span>
                    </li>
                    <div className="divider my-1"></div>
                    {session.user?.role === "admin" && (
                      <li>
                        <Link
                          href="/admin"
                          className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-base-200 block w-full"
                          onClick={() =>
                            toast.success("Welcome to Admin Dashboard" )
                          }
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        href="/orders"
                        className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-base-200 block w-full"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="px-4 py-2 text-error hover:bg-gray-200 dark:hover:bg-base-200 w-full text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-base-200 block w-full"
                      onClick={() =>
                        toast.error("Please sign in to continue")
                      }
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
