
"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function MyBreadcrumb() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="bg-gray-50 px-3 py-2 dark:bg-gray-800">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Universal Room
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Entertainment Room</Breadcrumb.Item>
      <Breadcrumb.Item>Film Room</Breadcrumb.Item>
    </Breadcrumb>
  );
}
