"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { buttonVariants } from "./ui/button";

const AuthLinks = () => {
  return (
    <div>
      <RegisterLink
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
        })}
      >
        Criar conta
      </RegisterLink>
      <LoginLink
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
        })}
      >
        Login
      </LoginLink>
    </div>
  );
};

export default AuthLinks;
