
"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiTable,
  HiUser,
  HiViewBoards,
  HiHome,
  HiOutlineCube,
  HiUserGroup,
  HiOutlineLibrary
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import SidebarGroup from "./../../components/sidebar/SidebarGroup";

export function MySidebar() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-h-screen fixed max-w-min">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>
          <SidebarGroup name="Universal Room" root={true}>
            <Sidebar.Item href="#">
              <SidebarGroup name="Entertainment Room">

                <Sidebar.Item href="#">
                  <SidebarGroup name="Film Room">

                    <Sidebar.Item href="#">
                      <SidebarGroup name="Anime Room">
                        <Sidebar.Item href="#" icon={HiOutlineCube}>Anime Indonesia Room</Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiOutlineCube}>Anime Thailand Room</Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiOutlineCube}>Anime Arab Room</Sidebar.Item>
                      </SidebarGroup>
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiOutlineCube}>Hollywood Room</Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiOutlineCube}>K-Drama Room</Sidebar.Item>
                  </SidebarGroup>
                </Sidebar.Item>

                <Sidebar.Item href="#" icon={HiOutlineCube}>Game Room</Sidebar.Item>
              </SidebarGroup>
            </Sidebar.Item>

             <Sidebar.Item href="#">
              <SidebarGroup name="Education Room">
                <Sidebar.Item href="#" icon={HiOutlineCube}>History Room</Sidebar.Item>
                <Sidebar.Item href="#" icon={HiOutlineCube}>Mathimatic Room</Sidebar.Item>
              </SidebarGroup>
            </Sidebar.Item>

          </SidebarGroup>
        </Sidebar.ItemGroup>

        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlineLibrary}>
            Manage Room
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUserGroup}>
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
