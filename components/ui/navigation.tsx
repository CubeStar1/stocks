"use client"

import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import GoBack from "./go-back"
import { usePathname } from "next/navigation"
import CommandMenu from "./command-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./button"
import ManageProfile from "@/components/supaauth/manage-profile";
import UserProfile from '@/components/supaauth/user-profile'

const NAVIGATION = [
  { title: "Markets", href: "/" },
  { title: "Screener", href: "/screener" },
  { title: "Chat", href: "/chat" },
  { title: "Docs", href: "/documents" },
  { title: "About", href: "/hero" }
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuItem, setMenuItem] = useState("Markets")

  return (
    <header className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur transition duration-500 ease-in-out">
      <div className="container">
        <div className="flex w-full flex-row justify-between py-4">
          <div>{pathname !== "/" && <GoBack />}</div>
          <div className="flex flex-row items-center gap-2">
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Navigate</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-28">
                  <DropdownMenuRadioGroup value={menuItem} onValueChange={setMenuItem}>
                  <NavigationMenu>
                    <NavigationMenuList className="flex-col">
                      {NAVIGATION.map((item) => (
                        <NavigationMenuItem key={item.title}>
                          <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
              </NavigationMenu>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {NAVIGATION.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              
            </div>
            <div className="flex flex-row items-center gap-2">
              <CommandMenu />
              <ThemeToggle />
              <UserProfile/>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  )
}
