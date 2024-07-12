import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Footer = () => {
  return (
    <div className="containerx pt-16">
      <div className="up flex justify-between md:flex-row flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">Stay up to date !</h1>
          <h1 className="mt-2">
            Subscribe to our newsletter to get inbox notifications.
          </h1>
        </div>
        <div>
          <h1 className="mb-2 text-sm flex gap-4">
            Sign up to our newsletter <ArrowDown className="w-[20px]" />
          </h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Enter Your Email " />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="down mt-16 flex justify-between l gap-6">
        <div className="flex justify-between md:items-center gap-2 w-full flex-col md:flex-row items-start">
          <div className="font-semibold">BNET</div>
          <div className="flex gap-4">
            <ul className="flex gap-6">
              <li className="font-semibold">
                <Link href="/">Home</Link>
              </li>
              <li className="font-semibold">
                <Link href="/">Blogs</Link>
              </li>
              <li className="font-semibold">
                <Link href="/">About</Link>
              </li>
              <li className="font-semibold">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <ul className="flex gap-3">
              <li className="font-semibold">
                <Link href="/">
                  <Facebook />
                </Link>
              </li>
              <li className="font-semibold">
                <Link href="/">
                  <Twitter />
                </Link>
              </li>
              <li className="font-semibold">
                <Link href="/">
                  <Linkedin />
                </Link>
              </li>
              <li className="font-semibold">
                <Link href="/">
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center mb-16 text-sm text-gray-500">
        &copy; 2021 BNET. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
