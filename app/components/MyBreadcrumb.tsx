
"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

interface RoomItem {
  id: number;
  parent_id: number | null;
  name: string;
  category: string;
  slug: string;
  children: RoomItem[];
}

function getBreadcrumbPath(slug: string, data: RoomItem[]): RoomItem[] {
    let path: RoomItem[] = [];

    function findRoomAndBuildPath(slug: string, data: RoomItem[], currentPath: RoomItem[]): boolean {
        for (const item of data) {
            const newPath = [...currentPath, item]; // Membuat salinan path yang ada dan menambahkan item saat ini
            if (item.slug === slug) {
                path = newPath;
                return true; // Room ditemukan
            }

            if (item.children && item.children.length > 0) {
                if (findRoomAndBuildPath(slug, item.children, newPath)) {
                    return true; // Room ditemukan di children
                }
            }
        }
        return false; // Room tidak ditemukan di cabang ini
    }

    findRoomAndBuildPath(slug, data, []);
    console.log(path) //datanya sudah ada kenapa tidak muncuk sebagai UI???
    return path;
}


interface MyBreadcrumbProps {
  slug: string;
  rooms: RoomItem[];
}

export function MyBreadcrumb({slug, rooms}: MyBreadcrumbProps) {
  const breadcrumbPath = getBreadcrumbPath(slug, rooms);

  return (
    <Breadcrumb aria-label="Breadcrumb navigation" className="bg-gray-50 px-3 py-2 dark:bg-gray-800">
      {breadcrumbPath.map((item, index) => (
        <Breadcrumb.Item
          key={item.id}
          href={item.href} // Menggunakan `href` dari item
          icon={index === 0 ? HiHome : undefined} // Ikon hanya untuk elemen pertama
        >
          {item.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
