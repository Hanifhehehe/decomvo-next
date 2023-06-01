"use client";

import { useRouter } from "next/navigation";

interface MenuItemProps {
    path: string;
    label: string;
}

function MenuItem({path, label}: MenuItemProps) {
    const router = useRouter()
    return (
      <div
        onClick={() => router.push(path)}
        className="px-4 py-3  hover:text-black text-cyan-700 transition font-semibold cursor-pointer"
      >
        {label}
      </div>
    );
};

export default MenuItem;
