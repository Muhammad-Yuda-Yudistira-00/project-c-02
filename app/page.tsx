import Image from "next/image";
import {MyNavbar} from "./components/MyNavbar";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  "root": {
    "base": "bg-yellow-300",
    "collapse": {
      "list": "items-center"
    }
  }
}


export default function Home() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <MyNavbar></MyNavbar>
    </Flowbite>
  );
}