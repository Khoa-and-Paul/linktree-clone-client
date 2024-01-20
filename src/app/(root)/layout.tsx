import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
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

  // if (user) {
  //   redirect(`/${user.id}`);
  // }

  return <>{children}</>;
}
