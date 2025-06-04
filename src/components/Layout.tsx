"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-gray-100 text-gray-800 p-4 border-b">
        <h1 className="text-xl font-bold">Data Explorer</h1>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 p-4 border-r">
          <nav className="space-y-2">
            <Link
              href="/market-comparison"
              className={`block p-2 rounded text-gray-700 ${
                pathname === "/market-comparison"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Market Comparison
            </Link>
            <Link
              href="/market-trends"
              className={`block p-2 rounded text-gray-700 ${
                pathname === "/market-trends"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Market Trends
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-white">{children}</main>
      </div>
    </div>
  );
}
