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

const NAVIGATION = [
  { title: "Markets", href: "/" },
  { title: "Screener", href: "/screener" },
  { title: "Chat", href: "/chat" },
  { title: "Docs", href: "/documents" }
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuItem, setMenuItem] = useState("Markets")

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            </div>
            
          </div>
        </div>
      </div>
    </header>
  )
}
