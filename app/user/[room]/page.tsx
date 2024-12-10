'use client';

import { MySidebar } from "./../../components/user/MySidebar";
import { MyModalbox } from "./../../components/MyModalbox";
import { MyCard } from "./../../components/MyCard";
import { MyBreadcrumb } from "./../../components/MyBreadcrumb";
import { useParams } from 'next/navigation';

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

export default function RoomPage()
{
  const params = useParams(); // Mengambil parameter dari URL
  const room = params.room;

  function activeRoom(slug) {
    const room = sidebarData.find(data => data.slug === slug); // Cari elemen yang cocok
    return room ? room.label : "Room not found"; // Kembalikan label jika ditemukan, atau pesan default
  }

  return (
    <div className="flex gap-4 rounded-xl min-h-screen">
      <aside className="flex-auto bg-white">
        <MySidebar sidebarData={sidebarData} />
      </aside>
      <main className="bg-purple-300 flex-auto mt-2">
        <div className="ml-0 w-full fixed">
          <MyBreadcrumb slug={room} sidebarData={sidebarData}></MyBreadcrumb>
        </div>
        <div className="mt-12 fixed text-center w-auto bg-amber-300 w-full top-14 shadow-sm">
          <h3 className="text-3xl font-bold dark:text-white text-white">{activeRoom(room)}</h3>
        </div>
        <div className="mt-20">
          <div className="w-full py-4">
            <MyModalbox />
          </div>
          <div>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </div>
        </div>
      </main>
    </div>

    )
}
