import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

import {
  Card,

  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div>
  

      <main className="flex justify-center py-10 px-2">
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  {/* Label With SVG Icon Container */}
                  <div className="flex">
                    <label htmlFor="email">Email</label>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-red-500"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 6v12"></path>
                      <path d="M17.196 9 6.804 15"></path>
                      <path d="m6.804 9 10.392 6"></path>
                    </svg>
                  </div>
                  <input type="email" className="border-2 focus:outline-none focus rounded-sm px-2 h-10 focus:border-blue-400 focus:invalid:border-red-400 required:border-pink-400" placeholder="Enter Your Email" />
                </div>
                <div className="grid gap-2">
                  <div className="flex">
                    <label htmlFor="password">Password</label>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-red-500"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 6v12"></path>
                      <path d="M17.196 9 6.804 15"></path>
                      <path d="m6.804 9 10.392 6"></path>
                    </svg>
                  </div>
                  <input type="password" className="border-2 rounded-sm h-10 px-2 focus:outline-0 focus:border-blue-400" placeholder="Enter your Password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" classNameName="w-full">
              Login
            </Button>
          </CardFooter>
        </Card>
      </main>

   
    </div>
  );
};

export default Login;
