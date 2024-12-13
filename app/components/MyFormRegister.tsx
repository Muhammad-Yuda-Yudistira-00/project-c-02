
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation'

export default function MyFormRegister() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah reload halaman

    // Kirim data ke API
    try {
      const { repeat_password, ...validData } = formData; // Hapus repeat_password
      const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiKey || !apiUrl) {
        console.error("API key atau URL tidak ditemukan di environment variables.");
        return;
      }

      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-api-key":
            apiKey,
              },
        body: JSON.stringify(validData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data berhasil dikirim:", result);
        // Lakukan sesuatu setelah berhasil (misalnya redirect atau tampilkan pesan)
        router.push('/user/universal-room');
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
      <Button type="submit">Register new account</Button>
    </form>
  );
}
