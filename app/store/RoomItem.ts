export interface RoomItem {
  id: number;
  parentId: number | null;
  name: string;
  category: string;
  slug: string;
  children?: RoomItem[];
}