import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default function SidebarGroup({children, name})
{
	return (
			
	          <Sidebar.Collapse icon={HiShoppingBag} label={name} className="border-b-2 border-red-400">
	            {children}
	          </Sidebar.Collapse>
			)
}