import { Sidebar } from "flowbite-react";
import {
  HiHome,
  HiOfficeBuilding
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

interface SidebarGroupProps {
  children: ReactNode;
  name: string;
  icon: string;
  defaultOpen?: boolean;
}

export default function SidebarGroup({children, name, icon, defaultOpen = true}: SidebarGroupProps)
{
	return (
			
	          <Sidebar.Collapse icon={HiOfficeBuilding} label={name} open={defaultOpen} className="border-b-2 border-red-400">
	            {children}
	          </Sidebar.Collapse>
			)
}
