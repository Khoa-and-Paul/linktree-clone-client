import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import NavBar from "@/src/components/navbar";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  // const { userId } = auth();
  // if (!userId) {
  //   redirect("/sign-in");
  // }

  // const user = await prisma.links.findFirst({
  //   where: {
  //     userId,
  //   },
  // });

  // if (!user) {
  //   redirect("/");
  // }

  // return (
  //   <>
  //     <NavBar />
  //     {children}
  //   </>
  // );
}
