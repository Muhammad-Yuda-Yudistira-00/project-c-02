"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function MyFormLogin()
{
	return(
    <form className="flex w-full flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" name="email" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" name="password" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" name="remember_me" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>

		)
}