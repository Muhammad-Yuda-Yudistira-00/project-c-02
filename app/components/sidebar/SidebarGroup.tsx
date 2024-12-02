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
  HiHome,
  HiOfficeBuilding
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export default function SidebarGroup({children, name, root = false})
{
	return (
			
	          <Sidebar.Collapse icon={root ? HiHome : HiOfficeBuilding} label={name} className="border-b-2 border-red-400">
	            {children}
	          </Sidebar.Collapse>
			)
}