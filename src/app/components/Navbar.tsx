import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  return (
    <nav className="flex containerx gap-3 pt-4 items-center justify-between ">
      <div className="logo font-semibold text-xl">BNET</div>

      <ul className="gap-14 justify-center hidden md:flex">
        <li className="hover:font-bold transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:font-bold transition-all">
          <Link href="/">Blogs</Link>
        </li>
        <li className="hover:font-bold transition-all">
          <Link href="/">About</Link>
        </li>
        <li className="hover:font-bold transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>

      <div className="block md:hidden">
        <Popover>
          <PopoverTrigger>
            <Menu />
          </PopoverTrigger>
          <PopoverContent>
            <ul className="gap-2 w-fit flex flex-col">
              <li className="hover:font-bold transition-all">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:font-bold transition-all">
                <Link href="/">Blogs</Link>
              </li>
              <li className="hover:font-bold transition-all">
                <Link href="/">About</Link>
              </li>
              <li className="hover:font-bold transition-all">
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-4 scale-90">
              <div className="login">
                <Button className="bg-transparent text-black hover:bg-main_blue hover:text-white transition-all">
                  Login
                </Button>
              </div>
              <div className="signup">
                <Button className="bg-main_blue">Sign up</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="gap-4 justify-center hidden md:flex">
        <div className="login">
          <Button className="bg-transparent text-black hover:bg-main_blue hover:text-white transition-all">
            Login
          </Button>
        </div>
        <div className="signup">
          <Button className="bg-main_blue">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
