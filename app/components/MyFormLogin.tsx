"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, {useState} from "react";
import { useRouter } from 'next/navigation';


export default function MyFormLogin()
{
  const router = useRouter()
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
    e.preventDefault(); // Mencegah reload halaman

    // Kirim data ke API
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiKey || !apiUrl) {
        console.error("API key atau URL tidak ditemukan di environment variables.");
        return;
      }

      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-api-key":
            apiKey,
              },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data berhasil dikirim:", result);
        // Lakukan sesuatu setelah berhasil (misalnya redirect atau tampilkan pesan)
        localStorage.setItem('user', JSON.stringify(result))
        router.push('/user/universal-room');
      } else {
        const errorText = await response.text();
        console.error("Gagal mengirim data:", response.statusText, errorText);
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
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