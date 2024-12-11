
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
import SidebarGroup from "./../../components/sidebar/SidebarGroup";
import Link from 'next/link';

interface RenderSidebarItemsProps {
  parentId: number | null;
  sidebarData: SidebarItem[];
}

const RenderSidebarItems: React.FC<RenderSidebarItemsProps> = ({ parentId, sidebarData }) => {
  return (
    <>
      {sidebarData
        .filter(item => item.parent_id === parentId) // Filter berdasarkan parent_id
        .map(item => {
          // Mengecek apakah item memiliki anak
          const hasChildren = sidebarData.some(child => child.parent_id === item.id);
          if (hasChildren) {
            return (
              <Sidebar.Item key={item.id} href={`/user/${item.slug}`} icon={item.icon}>
                  <SidebarGroup name={item.label} icon={item.icon} defaultOpen={true}>
                    {/* Panggil fungsi rekursif untuk anak-anak */}
                    <RenderSidebarItems parentId={item.id} sidebarData={sidebarData} />
                  </SidebarGroup>
              </Sidebar.Item>
            );
          } else {
            // Jika tidak ada anak, render item sebagai leaf node
            return (
              <Sidebar.Item key={item.id} href={`/user/${item.slug}`} icon={item.icon}>
                  {item.label}
              </Sidebar.Item>
            );
          }
        })}
    </>
  );
};

interface SidebarItem {
  id: number;
  parent_id: number | null;
  label: string;
  icon: string;
  href: string;
  hole: boolean;
  slug: string;
}

interface MySidebarProps {
  sidebarData: SidebarItem[];
}

export function MySidebar({sidebarData}: MySidebarProps) {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-h-screen fixed max-w-min">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Profile
          </Sidebar.Item>

          <RenderSidebarItems parentId={null} sidebarData={sidebarData} />

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
