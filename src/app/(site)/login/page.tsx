"use client";

import Link from "next/link";
import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { stat } from "fs";

interface formProps {
  email: string;
  password: string;
}

export default function Home() {
  const { data: session, status } = useSession();
  // CONST
  const [data, setData] = useState<formProps>({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      redirect("/home");
    }
  }, [session]);

  // HOOKS

  // FUNCTION
  const submitLogin: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();
      setisLoading(true);

      // Perform login authentication logic here
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/home",
      });
      // print error if error
      if (res?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Login success");
        router.refresh();
      }
    } catch (error) {}
    setisLoading(false);
    console.log(data);
  };
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen bg-primaryBg">
      <form
        onSubmit={submitLogin}
        className="flex flex-col w-full h-full justify-around items-center max-w-[350px]"
      >
        <div className="w-full text-center font-semibold text-[24px] text-darkPurple2 font-rubik">
          Welcome back to <br /> Parenthing
        </div>
        <div className="w-full space-y-5">
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
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-slate-800 placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
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
                placeholder="password"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, password: e.target.value });
                }}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm text-black placeholder:text-secondayGray placeholder:opacity-[50%] sm:text-sm sm:leading-6 focus:px-2 transition-all"
              />
            </div>
          </div>
          <div className="w-full text-center text-[12px]">or with</div>
          <div className="flex flex-row items-center justify-center gap-5">
            <button onClick={() => signIn('google')}>
              <FcGoogle size={40} />
            </button>
            <BsFacebook size={35} color={"#3b5998"} />
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex flex-col items-center justify-center px-20 py-3 font-bold text-[18px] text-center text-white rounded-xl bg-darkPurple1 hover:scale-105 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className=" animate-spin">
                <ImSpinner size={25} />
              </div>
            ) : (
              "Login"
            )}
          </button>
          <Link href={"/register"} className="flex justify-center w-full">
            <p className="pt-2 text-sm text-primaryYellow font-medium opacity-[90%] hover:opacity-[100%] transition-all">
              {"Don’t have an account yet?"}{" "}
              <span className="text-blue-400">Register</span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}
