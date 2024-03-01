// ナビゲーションバー(md (768px)以上)
"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar_Normal = () => {
  return (
    <>
      <NavigationMenu className="relative hidden rounded-full bg-black/70 px-8 py-6 md:flex ">
        <NavigationMenuList>
          {/* Topタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#section1Md"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>Top</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* 代表挨拶タグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#introductionMd"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>代表挨拶</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* サービスについてタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#serviceMd"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>サービスについて</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* 事務所についてタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#aboutMd"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>事務所について</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* 採用情報タグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#recruitMd"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>採用情報</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* アクセスタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#accessMd"
              className="cursor-pointer px-3 text-white duration-500 hover:underline"
            >
              <span>アクセス</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar_Normal;
