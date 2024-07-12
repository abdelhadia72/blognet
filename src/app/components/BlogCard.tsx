import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard({ image }) {
  return (
    <Link
      href="/blogs/34"
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative">
        <Image
          src={image}
          alt="Blockchain security illustration"
          width={300}
          height={200}
          layout="responsive"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded mr-2">
            Blockchain
          </span>
          <span className="text-gray-600 text-sm">5 min read</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">
          A beginner's guide to blockchain for engineers
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
        <Button variant="outline" className="flex items-center text-sm">
          Read more <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
    </Link>
  );
}
