"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  open: boolean;
}

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Vehicle Registry", href: "/vehicles" },
  { name: "Maintenance", href: "/maintenance" },
  { name: "Trip & Expense", href: "/expenses" },
  { name: "Performance", href: "/performance" },
  { name: "Analytics", href: "/analytics" },
];

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`relative bg-white border-r border-gray-200 transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <div className="py-6">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`relative flex items-center h-12 px-6 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" />
                )}

                <span className="ml-4">
                  {open && item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}