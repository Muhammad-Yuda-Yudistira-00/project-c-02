
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

const sidebarData = [
  { id: 1, parent_id: null, label: "Universal Room", icon: "HiHome", href: "#", hole: false, slug: "universal-room" },
  { id: 2, parent_id: 1, label: "Entertainment Room", icon: "HiOfficeBuilding", href: "#", hole: false, slug: "entertainment-room" },
  { id: 3, parent_id: 2, label: "Film Room", icon: "HiOfficeBuilding", href: "#", hole: false, slug: "film-room" },
  { id: 4, parent_id: 3, label: "Anime Room", icon: "HiOfficeBuilding", href: "#", hole: false, slug: "anime-room" },
  { id: 5, parent_id: 4, label: "Anime Indonesia Room", icon: "HiOutlineCube", href: "#", hole: true, slug: "anime-indonesia-room" },
  { id: 6, parent_id: 4, label: "Anime Thailand Room", icon: "HiOutlineCube", href: "#", hole: true, slug: "anime-thailand-room" },
  { id: 7, parent_id: 4, label: "Anime Arab Room", icon: "HiOutlineCube", href: "#", hole: true, slug: "anime-arab-room" },
  { id: 8, parent_id: 3, label: "Hollywood Room", icon: "HiOutlineCube", href: "#", hole: false, slug: "hollywood-room" },
  { id: 9, parent_id: 3, label: "K-Drama Room", icon: "HiOutlineCube", href: "#", hole: false, slug: "k-drama-room" },
  { id: 10, parent_id: 2, label: "Game Room", icon: "HiOutlineCube", href: "#", hole: false, slug: "game-room" },
  { id: 11, parent_id: 1, label: "Education Room", icon: "HiOfficeBuilding", href: "#", hole: false, slug: "education-room" },
  { id: 12, parent_id: 11, label: "History Room", icon: "HiOutlineCube", href: "#", hole: true, slug: "history-room" },
  { id: 13, parent_id: 11, label: "Mathimatic Room", icon: "HiOutlineCube", href: "#", hole: true, slug: "mathimatic-room" }
];


interface SidebarItem {
  id: number;
  parent_id: number | null;
  label: string;
  icon: string;
  href: string;
  hole: boolean;
}

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
              <Sidebar.Item key={item.id} icon={item.icon}>
                <Link href={`/user/${item.slug}`} passHref>
                  <SidebarGroup name={item.label} icon={item.icon}>
                    {/* Panggil fungsi rekursif untuk anak-anak */}
                    <RenderSidebarItems parentId={item.id} sidebarData={sidebarData} />
                  </SidebarGroup>
                </Link>
              </Sidebar.Item>
            );
          } else {
            // Jika tidak ada anak, render item sebagai leaf node
            return (
              <Sidebar.Item key={item.id} href={item.href} icon={item.icon}>
                <Link href={`/user/${item.slug}`} passHref>
                  {item.label}
                </Link>
              </Sidebar.Item>
            );
          }
        })}
    </>
  );
};



export function MySidebar() {
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
