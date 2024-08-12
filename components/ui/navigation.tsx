"use client"

import { useState, useTransition } from "react"
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { createSupabaseBrowser } from "@/lib/supabase/client"
import { Button } from "./button"

const NAVIGATION = [
  { title: "Markets", href: "/" },
  { title: "Screener", href: "/screener" },
  { title: "Chat", href: "/chat" },
  { title: "Docs", href: "/documents" },
  { title: "About", href: "/hero" },
  { title: "Profile", href: "/profile" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuItem, setMenuItem] = useState("Markets")
  const [isAuthAction, startAuthAction] = useTransition();
  const router = useRouter();
  const [isSignOut, startSignOut] = useTransition();

  const signout = () => {
		startSignOut(async () => {
			const supabase = createSupabaseBrowser();
			await supabase.auth.signOut();
			router.push("/signin");
		});
	};

  return (
    <header className="sticky top-0 z-50 w-full bg-background/50 backdrop-blur transition duration-500 ease-in-out">
      <div className="container">
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            Stocks
          </Link>

          <div className="hidden md:flex items-center space-x-4">
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

          <div className="flex items-center space-x-4">
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
            <CommandMenu />
            <ThemeToggle />
            <Button onClick={signout}>{isSignOut ? "Signing out..." : "Sign out"}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}