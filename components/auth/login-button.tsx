"use client";

import { Children } from "react";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {

    const router = useRouter();


  const onClick = () => {
    console.log("Login button cliced");
    router.push("/auth/login")
  };

  if(mode === "modal"){
    return (
        <span>
            TODO: implement modal
        </span>
    )
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
