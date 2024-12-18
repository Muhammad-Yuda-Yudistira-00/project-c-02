import {RoomItem} from '@/app/store/RoomItem'

export default function findRoomBySlug(rooms: RoomItem[], activeRoom: string | string[]): null | RoomItem {
  if (!rooms) return null; // Handle jika rooms null
  for (const room of rooms) {
    if (room.slug == activeRoom) {
      return room;
    }
    if (room.children && room.children.length > 0) {
      const foundInChildren = findRoomBySlug(room.children, activeRoom);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
}