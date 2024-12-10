'use client';

import { MySidebar } from "./../../components/user/MySidebar";
import { MyModalbox } from "./../../components/MyModalbox";
import { MyCard } from "./../../components/MyCard";
import { MyBreadcrumb } from "./../../components/MyBreadcrumb";
import { useParams } from 'next/navigation';


export default function RoomPage()
{
  const params = useParams(); // Mengambil parameter dari URL
  const room = params.room;

  return (
    <div className="flex gap-4 rounded-xl min-h-screen">
      <aside className="flex-auto bg-white">
        <MySidebar />
      </aside>
      <main className="bg-purple-300 flex-auto mt-2">
        <div className="ml-0 w-full fixed">
          <MyBreadcrumb></MyBreadcrumb>
        </div>
        <div className="mt-12 fixed text-center w-auto bg-amber-300 w-full top-14 shadow-sm">
          <h3 className="text-3xl font-bold dark:text-white text-white">{room} Room</h3>
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
