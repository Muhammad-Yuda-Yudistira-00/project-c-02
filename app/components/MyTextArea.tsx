
"use client";

import { Label, Textarea } from "flowbite-react";

export function MyTextArea() {
  return (
    <div className="max-w-2xl m-auto border-b-2 pb-4">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
  );
}
