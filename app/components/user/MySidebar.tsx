
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

const sidebarData = [
  { id: 1, parent_id: null, label: "Universal Room", icon: "HiHome", href: "#", hole: false },
  { id: 2, parent_id: 1, label: "Entertainment Room", icon: "HiOfficeBuilding", href: "#", hole: false },
  { id: 3, parent_id: 2, label: "Film Room", icon: "HiOfficeBuilding", href: "#", hole: false },
  { id: 4, parent_id: 3, label: "Anime Room", icon: "HiOfficeBuilding", href: "#", hole: false },
  { id: 5, parent_id: 4, label: "Anime Indonesia Room", icon: "HiOutlineCube", href: "#", hole: true },
  { id: 6, parent_id: 4, label: "Anime Thailand Room", icon: "HiOutlineCube", href: "#", hole: true },
  { id: 7, parent_id: 4, label: "Anime Arab Room", icon: "HiOutlineCube", href: "#", hole: true },
  { id: 8, parent_id: 3, label: "Hollywood Room", icon: "HiOutlineCube", href: "#", hole: false },
  { id: 9, parent_id: 3, label: "K-Drama Room", icon: "HiOutlineCube", href: "#", hole: false },
  { id: 10, parent_id: 2, label: "Game Room", icon: "HiOutlineCube", href: "#", hole: false },
  { id: 11, parent_id: 1, label: "Education Room", icon: "HiOfficeBuilding", href: "#", hole: false },
  { id: 12, parent_id: 11, label: "History Room", icon: "HiOutlineCube", href: "#", hole: true },
  { id: 13, parent_id: 11, label: "Mathimatic Room", icon: "HiOutlineCube", href: "#", hole: true }
];

const RenderSidebarItems = ({ parentId, sidebarData }) => {
  return (
    <>
      {sidebarData
        .filter(item => item.parent_id === parentId) // Filter berdasarkan parent_id
        .map(item => {
          // Mengecek apakah item memiliki anak
          const hasChildren = sidebarData.some(child => child.parent_id === item.id);
          if (hasChildren) {
            return (
              <Sidebar.Item key={item.id} href={item.href} icon={item.icon}>
                <SidebarGroup name={item.label} icon={item.icon}>
                  {/* Panggil fungsi rekursif untuk anak-anak */}
                  <RenderSidebarItems parentId={item.id} sidebarData={sidebarData} />
                </SidebarGroup>
              </Sidebar.Item>
            );
          } else {
            // Jika tidak ada anak, render item sebagai leaf node
            return (
              <Sidebar.Item key={item.id} href={item.href} icon={item.icon}>
                {item.label}
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




{/*<Sidebar aria-label="Sidebar with multi-level dropdown example" className="max-h-screen fixed max-w-min">
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
</Sidebar>*/}
