
"use client";

import { Dropdown } from "flowbite-react";
import { ReactNode } from "react";

interface UserDropdownProps {
  children: ReactNode;
}

export function UserDropdown({ children }: UserDropdownProps) {
  return (
    <Dropdown label="Dropdown left start" placement="left-start" dismissOnClick={false} renderTrigger={() => <div className="flex flex-wrap gap-2 bg-amber-400 pr-8 pl-2 rounded-l-full">{children}</div>} className="border-2 border-slate-300">
      <Dropdown.Item className="border-b-2">Settings</Dropdown.Item>
      <Dropdown.Item className="border-b-0" onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
