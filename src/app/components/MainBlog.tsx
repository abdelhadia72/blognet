import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MainBlog() {
  return (
    <div className="containerx flex md:flex-row flex-col">
      <div className="md:flex-1 h-64 md:h-auto relative">
        <div className="absolute inset-0">
          <Image
            src="/cover.webp"
            alt="Dynamic Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="right border p-4 flex-1">
        <div className="head flex gap-4 items-center mb-3">
          <p className="bg-black text-white w-fit rounded-sm p-1 px-2 font-semibold">
            Crypto
          </p>
          <p className="time ">5 min read</p>
        </div>
        <h1 className="text-4xl w-[80%] my-6 font-semibold">
          Your passport to web3 economy
        </h1>
        <p className="w-[70%]">
          In my latest blog post, I delve into the transformative power of
          mindfulness in everyday life. Discover practical tips on incorporating
          mindfulness into your routine and its profound impact on stress
          reduction and overall well-being.
        </p>

        <Button className="flex gap-2 mb-6 items-center hover:gap-6 transition-all mt-6 bg-transparent border-2 text-black border-black hover:text-white">
          Read More <ChevronRight className="w-[20px]" />
        </Button>
      </div>
    </div>
  );
}
