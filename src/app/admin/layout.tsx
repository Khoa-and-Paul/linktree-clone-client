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
import {
  AnalyticsIcon,
  AppearanceIcon,
  LinkIcon,
  LinkTreeIcon,
} from "@/src/components/icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/avatar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="my-2.5">
          <NavigationMenuItem className="md:ml-4 hover:bg-transparent">
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
              <NavigationMenuLink>
                <AnalyticsIcon color="#000000" />
                Analytics
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="hover:bg-transparent ml-auto md:mr-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>

      <section className="bg-slate-100 w-screen h-dvh">{children}</section>
    </>
  );
}
