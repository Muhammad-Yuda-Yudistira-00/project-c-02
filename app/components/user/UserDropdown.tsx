
"use client";

import { Dropdown } from "flowbite-react";

export function UserDropdown({ children }) {
  return (
    <Dropdown label="Dropdown left start" placement="left-start" dismissOnClick={false} renderTrigger={() => children} className="border-2 border-slate-300">
      <Dropdown.Item className="border-b-2">Settings</Dropdown.Item>
      <Dropdown.Item className="border-b-0">Sign out</Dropdown.Item>
    </Dropdown>
  );
}
