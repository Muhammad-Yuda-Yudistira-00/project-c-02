"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import handleAuthSubmit from "@/app/logic/handleAuthSubmit";


export default function MyFormLogin()
{
  const router = useRouter()
  const path = 'login';
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

   // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   // Submit form
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

	return(
    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" name="email" type="email" placeholder="name@flowbite.com" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" name="password" type="password" required value={formData.password} onChange={handleChange} />
      </div>
      <Button type="submit">Submit</Button>
    </form>

		)
}