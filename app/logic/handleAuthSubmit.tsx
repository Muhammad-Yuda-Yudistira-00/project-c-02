 import React from "react";

 // Submit form
  const handleAuthSubmit = async ({formData, path, router}) => {
    // Kirim data ke API
    try {
      const { repeat_password, ...validData } = formData; // Hapus repeat_password
      const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiKey || !apiUrl) {
        console.error("API key atau URL tidak ditemukan di environment variables.");
        return;
      }

      const response = await fetch(`${apiUrl}/api/auth/${path}`, {
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
        localStorage.setItem("user", JSON.stringify(result));
        router.push('/user/universal-room');
      } else {
        const errorText = await response.text();
        console.error("Gagal mengirim data:", response.statusText, errorText);
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
    }
  };

  export default handleAuthSubmit;