export default function findRoomBySlug(rooms, slug) {
  if (!rooms) return null; // Handle jika rooms null
  for (const room of rooms) {
    if (room.slug.toLowerCase().trim() === slug.toLowerCase().trim()) {
      return room;
    }
    if (room.children && room.children.length > 0) {
      const foundInChildren = findRoomBySlug(room.children, slug);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return null;
}