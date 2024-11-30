
"use client";

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
  HiViewBoards
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import SidebarGroup from "./../../components/sidebar/SidebarGroup";

export function MySidebar() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiTable}>
            Profile
          </Sidebar.Item>
          <SidebarGroup name="Universal Room">
            <Sidebar.Item href="#">
              <SidebarGroup name="Entertainment Room">

                <Sidebar.Item href="#">
                  <SidebarGroup name="Film Room">

                    <Sidebar.Item href="#">
                      <SidebarGroup name="Anime Room">
                        <Sidebar.Item href="#" icon={HiChartPie}>Anime Indonesia Room</Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiChartPie}>Anime Thailand Room</Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiChartPie}>Anime Arab Room</Sidebar.Item>
                      </SidebarGroup>
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiChartPie}>Hollywood Room</Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiChartPie}>K-Drama Room</Sidebar.Item>
                  </SidebarGroup>
                </Sidebar.Item>

                <Sidebar.Item href="#" icon={HiChartPie}>Game Room</Sidebar.Item>
              </SidebarGroup>
            </Sidebar.Item>

             <Sidebar.Item href="#">
              <SidebarGroup name="Education Room">
                <Sidebar.Item href="#" icon={HiChartPie}>History Room</Sidebar.Item>
                <Sidebar.Item href="#" icon={HiChartPie}>Mathimatic Room</Sidebar.Item>
              </SidebarGroup>
            </Sidebar.Item>

          </SidebarGroup>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Manage Room
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Manage User
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>

      </Sidebar.Items>
    </Sidebar>
  );
}
