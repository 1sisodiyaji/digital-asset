"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Illustration from '/public/Illustration.png';
import { Upload } from 'lucide-react';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      toast.error(result.error);
      setLoading(false);
    } else {
      toast.success("Login successful!");
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <>
      <div>
        <div className="flex   h-[91vh]  px-6 py-2">
          <div className="md:w-1/3 hidden md:block bg-bgRed px-6 py-12 rounded-lg">
            <div className="flex flex-col justify-around items-start h-full">
              
              <div>
              <div className="flex justify-start items-center text-2xl gap-2 mb-4">
                <div className="w-12 h-12 rounded-full border flex justify-center items-center"> <Upload size={24} />  </div>
                UploadIt
              </div>
                <h1 className="text-3xl ">Manage your files the best way</h1>
                <h3 className="text-md">Awesome, we have created the perfect place for you to store all your documents.</h3>

              </div>
              <Image src={Illustration} width={1000} height={1000} alt="register image" className="max-w-60 mx-auto" />
            </div>
          </div>

          <div className="md:w-2/3 w-full flex justify-center items-center">
            <div className="w-96 mx-auto text-gray-800 dark:text-gray-200">
              <Image
                src={'https://res.cloudinary.com/dbqq41bpc/image/upload/v1736060810/logo_outqnc.jpg'}
                width={1000}
                height={1000}
                alt="register image"
                className="md:w-32 md:h-32 w-16 h-16 mb-4 rounded-full mx-auto" />

              <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="eg:637golusingh@gmail.com"
                    className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block mb-1">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="********"
                    className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full  text-white dark:text-gray-200 py-2 rounded  ${loading ? 'bg-gray-400 cursor-not-allowed ' : 'bg-red-500 hover:bg-red-600 cursor-pointer'}`}
                >
                  {loading ? <span className="loading loading-dots loading-md"></span> : 'Login'}
                </button>
                <p className="text-center mt-4">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-blue-500 hover:text-blue-600">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
