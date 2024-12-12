
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, {useState} from "react";

export default function MyFormRegister() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });


  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
      const { repeat_password, ...validData } = formData; // Hapus repeat_password

    // Kirim data ke API
    try {
      console.log("Form data:", validData);
      console.log("Endpoint:", `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`);
      console.log("Headers:", {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
      });

      const response = await fetch(`https://cors-anywhere.herokuapp.com/${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_SECRET_KEY,
        },
        body: JSON.stringify(validData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data berhasil dikirim:", result);
        // Lakukan sesuatu setelah berhasil (misalnya redirect atau tampilkan pesan)
      } else {
        const errorText = await response.text();
        console.error("Gagal mengirim data:", response.statusText, errorText);
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" name="repeat_password" type="password" required shadow value={formData.repeat_password} onChange={handleChange} />
      </div>
      {/*<div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>*/}
      <Button type="submit">Register new account</Button>
    </form>
  );
}
