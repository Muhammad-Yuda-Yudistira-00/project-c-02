'use client';

import { MySidebar } from "./../../components/user/MySidebar";
import { MyModalbox } from "./../../components/MyModalbox";
import { MyCard } from "./../../components/MyCard";
import { MyBreadcrumb } from "./../../components/MyBreadcrumb";
import { useParams } from 'next/navigation';
import React, {useState, useEffect} from 'react';
import findRoomBySlug from "@/app/logic/room/findRoomBySlug";

export default function RoomPage()
{
  const params = useParams(); // Mengambil parameter dari URL
  const activeRoom = params.room;
  console.log({activeRoom})


  const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_API_SECRET_KEY
  const [rooms, setRooms] = useState(null);
  const [roomLabel, setRoomLabel] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      if (apiKey) { // Check if apiKey is defined (not null or undefined)
        headers.append('X-API-KEY', apiKey);
      }

      const res = await fetch(`${apiUrl}/api/room/list`, { // atau ke URL eksternal, contoh: 'https://api.example.com/data'
          method: 'GET',
          headers,
        }); // Bisa juga fetch ke external API
      const data = await res.json();
      setRooms(data.data);
    };

    fetchRooms();
  }, []);

// Di dalam useEffect:
useEffect(() => {
    if (rooms && activeRoom) {
        const activeRoomData = findRoomBySlug(rooms, activeRoom);
        setRoomLabel(activeRoomData ? activeRoomData.name : "Room not found");
    } else if (!activeRoom){
        setRoomLabel("Universal Room")
    }
}, [rooms, activeRoom]);

  return (
    <div className="flex gap-4 rounded-xl min-h-screen">
      <aside className="flex-auto bg-white">
        <MySidebar rooms={rooms} />
      </aside>
      <main className="bg-purple-300 flex-auto mt-2">
        <div className="ml-0 w-full fixed">
          {rooms ? ( // Hanya render MyBreadcrumb jika rooms tidak null
              <MyBreadcrumb slug={activeRoom as string} rooms={rooms} />
          ) : (
              <div>Loading Breadcrumb...</div> // Atau null
          )}
        </div>
        <div className="mt-12 fixed text-center w-auto bg-amber-300 w-full top-14 shadow-sm">
          <h3 className="text-3xl font-bold dark:text-white text-white">
            {roomLabel}
          </h3>
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
