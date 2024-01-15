import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const NavBar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
