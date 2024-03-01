// ナビゲーションバー（md (768px)以下で出現）

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

const NavBar_Hidden = () => {
  return (
    <div className="flex h-[60px] w-full items-center justify-between border-b-[0.3px] border-black bg-white px-2 pt-1 md:hidden">
      <HeaderLogo />
      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify size={40} strokeWidth={3} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-5 w-[150px] bg-white">
            {/* Topタグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#section1" className="w-full">
                <span>トップページ</span>
              </Link>
            </DropdownMenuItem>
            {/* 代表挨拶タグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#introduction01" className="w-full">
                <span>代表挨拶</span>
              </Link>
            </DropdownMenuItem>
            {/* プロフィールタグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#introduction02" className="w-full">
                <span>プロフィール</span>
              </Link>
            </DropdownMenuItem>
            {/* サービスについてタグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#service" className="w-full">
                <span>サービスについて</span>
              </Link>
            </DropdownMenuItem>
            {/* 事務所についてタグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#about" className="w-full">
                <span>事務所について</span>
              </Link>
            </DropdownMenuItem>
            {/* 採用情報タグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#recruit" className="w-full">
                <span>採用情報</span>
              </Link>
            </DropdownMenuItem>
            {/* アクセスタグ----------------------------------------------------------- */}
            <DropdownMenuItem className="font-semibold text-black duration-500 hover:underline">
              <Link href="#access" className="w-full">
                <span>アクセス</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar_Hidden;
