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
}

export default function SidebarGroup({children, name, icon}: SidebarGroupProps)
{
	return (
			
	          <Sidebar.Collapse icon={HiOfficeBuilding} label={name} className="border-b-2 border-red-400">
	            {children}
	          </Sidebar.Collapse>
			)
}
