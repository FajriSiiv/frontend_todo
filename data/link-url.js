import { FolderHeart, FolderLock, PenLine, Trash2 } from "lucide-react";

export const linkUrl = [
  {
    name: "Note",
    url: "/",
    id: "1",
    icon: <PenLine />,
  },
  {
    name: "Favorite",
    url: "/favorite",
    id: "2",
    icon: <FolderHeart />,
  },
  {
    name: "Archive",
    url: "/archive",
    id: "3",
    icon: <FolderLock />,
  },
  {
    name: "Deleted",
    url: "/trash",
    id: "4",
    icon: <Trash2 />,
  },
];
