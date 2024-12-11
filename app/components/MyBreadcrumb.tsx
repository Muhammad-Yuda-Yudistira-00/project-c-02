
"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

interface SidebarItem {
  id: number;
  parent_id: number | null;
  label: string;
  icon: string;
  href: string;
  hole: boolean;
  slug: string;
}

function getBreadcrumbPath(slug: string, data: SidebarItem[]): SidebarItem[] {
    const path: SidebarItem[] = [];
  let current = data.find(item => item.slug === slug);

  while (current) {
    path.unshift(current); // Tambahkan elemen ke awal array
    current = data.find(item => item.id === current?.parent_id); // Cari parent berdasarkan parent_id
  }

  return path; // Kembalikan array breadcrumb dari root ke elemen saat ini
}


interface MyBreadcrumbProps {
  slug: string;
  sidebarData: SidebarItem[];
}

export function MyBreadcrumb({slug, sidebarData}: MyBreadcrumbProps) {
  const breadcrumbPath = getBreadcrumbPath(slug, sidebarData);

  return (
    <Breadcrumb aria-label="Breadcrumb navigation" className="bg-gray-50 px-3 py-2 dark:bg-gray-800">
      {breadcrumbPath.map((item, index) => (
        <Breadcrumb.Item
          key={item.id}
          href={item.href} // Menggunakan `href` dari item
          icon={index === 0 ? HiHome : undefined} // Ikon hanya untuk elemen pertama
        >
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
