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
import LinkTreeIcon from "@/src/components/icons/link-tree-icon";
import LinkIcon from "@/src/components/icons/link-icon";
import { cn } from "@/lib/utils"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationMenu >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink><LinkTreeIcon color="#000000"/></NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin" legacyBehavior passHref>
                            <NavigationMenuLink><LinkIcon color="#000000"/>Links</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/admin/appearance" legacyBehavior passHref>
                            <NavigationMenuLink>Appearance</NavigationMenuLink>
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

            <section className="bg-slate-50 w-screen h-dvh">
                {children}
            </section>
        </>
    );
}