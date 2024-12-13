
"use client";

import Link from "next/link";
import { Navbar, Avatar, Flowbite } from "flowbite-react";
import React, { useState, useEffect } from 'react';
import { Button } from "flowbite-react";
import {UserDropdown} from "./user/UserDropdown";
import { useRouter } from 'next/navigation';


export function MyNavbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');

      // Periksa apakah storedUser bukan null
      if (storedUser) {
        try {
          // Coba parse JSON, jika berhasil simpan ke dalam state
          const data = JSON.parse(storedUser);
          setUser(data);
          console.log(user + " dan " + data)
        } catch (error) {
          console.error("Terjadi kesalahan saat parsing data user:", error);
          // Handle error, misalnya hapus data dari localStorage atau set user ke nilai default
        }
      } else {
        // Jika storedUser adalah null, set user ke null
        setUser(null);
        console.log(user + " Test")
      }
      setLoading(false)
    }
    console.log(user + " Test1,")
  }, [localStorage]);

  const handleLogout = () => {
    if(user) {
      localStorage.removeItem('user')
      setUser(null) 
      router.push('/login')
    }
  }

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
          {!loading && (
            <>
          {user ? <UserDropdown handleLogout={handleLogout}>            
              <Avatar img="https://avatar.iran.liara.run/public/job/farmer/male" alt="avatar of Jese" rounded className="border-2 rounded-full border-indigo-800" />
          </UserDropdown> : (
        <span className="flex text-slate-700">
          <Navbar.Link href="/register" as={Link} className="text-slate-700">
            <small className="inline-block">register</small>
          </Navbar.Link>
          <span className="mx-2">/</span>
          <Navbar.Link as={Link} href="/login">
            <Button color="success" size="xs" type="button">
              Login
            </Button>
          </Navbar.Link>
        </span>
      )}
        </>
         )}
        </Navbar.Collapse>
      </Navbar>
  );
}
