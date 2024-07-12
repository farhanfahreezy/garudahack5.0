import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Navbar from "@/app/components/Navbar";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const session = await getServerSession(authOptions);
  //   if (!session) {
  //     redirect("/");
  //   }
  return (
    <div className="w-full h-screen relative">
      <div>{children}</div>
      <nav className="fixed bottom-0 w-full flex items-center justify-center">
        <Navbar />
      </nav>
    </div>
  );
}
