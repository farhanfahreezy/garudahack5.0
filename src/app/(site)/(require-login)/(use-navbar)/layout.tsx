import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Navbar from "@/app/components/Navbar";

export default async function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const session = await getServerSession(authOptions);
  //   if (!session) {
  //     redirect("/");
  //   }
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <nav className="w-full flex items-center justify-center z-[10]">
        <Navbar />
      </nav>
    </div>
  );
}
