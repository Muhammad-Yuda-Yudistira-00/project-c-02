
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import handleAuthSubmit from "@/app/logic/handleAuthSubmit";
import { useRouter } from 'next/navigation'

export default function MyFormRegister() {
  const router = useRouter();
  const path = "register";
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await handleAuthSubmit({ formData, path, router }); // Assuming handleSubmit takes formData
      // Handle successful registration (e.g., redirect, message)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., display error message)
    }
  };



  return (
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" name="name" type="text" placeholder="Fathur Rohman" required shadow value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your username" />
        </div>
        <TextInput id="username" name="username" type="text" placeholder="Atuy" required shadow value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" name="email" type="email" placeholder="fathur.rohman@gmail.com" required shadow value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" name="password" type="password" required shadow value={formData.password} onChange={handleChange} />
      </div>
      <Button type="submit">Register new account</Button>
    </form>
  );
}
