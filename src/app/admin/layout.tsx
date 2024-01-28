"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/src/components/navigation-menu";
import Link from "next/link";
import { AppearanceIcon, LinkIcon, LinkTreeIcon } from "@/src/components/icons";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className={cn("my-2.5")}>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                <LinkTreeIcon color="#000000" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin" legacyBehavior passHref>
              <NavigationMenuLink>
                <LinkIcon color="#000000" />
                Links
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/appearance" legacyBehavior passHref>
              <NavigationMenuLink>
                <AppearanceIcon color="#000000" />
                Appearance
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/admin/analytics" legacyBehavior passHref>
              <NavigationMenuLink>Analytics</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>

      <section className="bg-slate-100 w-screen h-dvh">{children}</section>
    </>
  );
}
