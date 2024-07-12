"use client";

import Link from "next/link";
import React, {
  ChangeEvent,
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";
import { useRouter, redirect } from "next/navigation";
import { trpc } from "@/utils/trpc";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

export default function Register() {
  const { data: session, status } = useSession();
  // CONST
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const result = trpc.user.userRegister.useMutation();

  useEffect(() => {
    if (session) {
      redirect("/home");
    }
  }, [session]);

  // FUNCTION
  const submitRegistration: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setloading(true);
    await result.mutateAsync({
      name: data.name,
      email: data.email,
      password: data.password,
      rePassword: data.confirmPassword,
    });
    console.log(result)
    if (result) {
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          callbackUrl: "/data-collection",
        });
        // print error if error
        if (res?.error) {
          toast.error("Invalid credentials");
        } else {
          toast.success("Login success");
          router.refresh();
        }
      } catch (error) {}
    }
    setloading(false);

    console.log(data);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen bg-primaryBg">
      <form
        onSubmit={submitRegistration}
        className="flex flex-col w-full h-full justify-evenly items-center max-w-[350px]"
      >
        <div className="w-full text-center font-semibold text-[24px] text-darkPurple2 font-rubik">
          Empowering Parents with Knowledge, Support, and Community
        </div>
        <div className="w-full space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium leading-6"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="text"
                placeholder="Miles Morales"
                required
                value={data.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, name: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="example@mail.com"
                value={data.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, email: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, password: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={data.confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, confirmPassword: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>

          <div className="w-full text-center text-[12px]">or signup with</div>
          <div className="flex flex-row items-center justify-center gap-5">
            <FcGoogle size={40} />
            <BsFacebook size={35} color={"#3b5998"} />
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <button
            type="submit"
            disabled={loading}
            className="flex flex-col items-center justify-center px-20 py-3 font-bold text-[18px] text-center text-white rounded-xl bg-darkPurple1 hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center animate-spin">
                <ImSpinner size={25} />
              </div>
            ) : (
              "Register"
            )}
          </button>
          <Link href={"/login"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryYellow font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Already have an account?"}{" "}
              <span className="text-blue-400">Login</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
