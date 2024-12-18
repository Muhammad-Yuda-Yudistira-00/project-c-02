
"use client";

import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiOutlineCube,
  HiUserGroup,
  HiOutlineLibrary
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import SidebarGroup from "@/app/components/sidebar/SidebarGroup";
import Link from 'next/link';
import {RoomItem} from '@/app/store/RoomItem';

interface RenderSidebarItemsProps {
  parentId: number | null;
  rooms: RoomItem[];
}

const RenderSidebarItems: React.FC<RenderSidebarItemsProps> = ({ parentId, rooms }) => {
  if (!rooms) {
    return null;
  }

  const filteredRooms = rooms.filter(item => item.parentId === parentId);

  return (
    <>
      {filteredRooms.map(item => (
        <Sidebar.Item key={item.id} href={`/room/${item.slug}`} icon={HiOutlineCube}>
          {item.children && item.children.length > 0 ? ( // Periksa children
            <SidebarGroup name={item.name} icon={HiOutlineCube} defaultOpen={true}>
              {/* Rekursif dengan children */}
              <RenderSidebarItems parentId={item.id} rooms={item.children} />
            </SidebarGroup>
          ) : (
            item.name
          )}
        </Sidebar.Item>
      ))}
    </>
  );
};

interface MySidebarProps {
  rooms: RoomItem[] | null;
}

export function MySidebar({rooms}: MySidebarProps) {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-h-screen fixed max-w-min">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>

          {/* Conditional rendering yang benar */}
          {rooms === null ? (
            <div className="text-black">Loading data...</div>
          ) : (!rooms || rooms.length === 0) ? (
            <div className="text-black">No rooms available.</div>
          ) : (
            <div>
              <RenderSidebarItems parentId={null} rooms={rooms} />
            </div>
          )}

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
