
"use client";

import Link from "next/link";
import { Navbar, Avatar, Flowbite } from "flowbite-react";
import React, { useState } from 'react';
import { Button } from "flowbite-react";
import {UserDropdown} from "./user/UserDropdown";



export function MyNavbar() {
    const [user, setUser] = useState("yudi");

  return (
      <Navbar fluid rounded className="fixed w-screen top-0 left-0 shadow-lg z-20">
        <Navbar.Brand as={Link} href="/">
          <img src="/next.svg" className="mr-3 h-6 sm:h-9 max-h-3" alt="Nextjs Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-slate-700">Thunder</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="h-full w-full flex justify-center items-center" href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link className="h-full w-full flex justify-center items-center" href="#">Contact</Navbar.Link>
          {user ? <UserDropdown>            
              <Avatar img="https://avatar.iran.liara.run/public/job/farmer/male" alt="avatar of Jese" rounded className="border-2 rounded-full border-indigo-800" />
          </UserDropdown> : (
        <span className="flex text-slate-700">
          <Navbar.Link href="/register" as={Link} className="text-slate-700">
            <small className="inline-block">register</small>
          </Navbar.Link>
          <span className="mx-2">/</span>
          <Navbar.Link as={Link} href="/login">
            <Button color="success" size="xs" type="button" className="">
              Login
            </Button>
          </Navbar.Link>
        </span>
      )}
        </Navbar.Collapse>
      </Navbar>
  );
}
