import BlogCard from "@/app/components/BlogCard";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Eye, Calendar } from "lucide-react";
import Image from "next/image";

export default function BlogPost({ params }) {
  console.log(params);

  return (
    <div className="containerx">
      <Navbar />
      <div className="head mt-16">
        <div className="flex gap-3 items-center justify-center flex-col md:flex-row">
          <p className="flex gap-2 text-sm items-center bg-green-400 rounded-full w-fit px-4">
            <Eye className="w-[20px]" /> 12347 View
          </p>
          <p className="flex gap-2 text-sm items-center  rounded-full w-fit px-4">
            <Calendar className="w-[20px]" /> July 12, 2024
          </p>
        </div>
        <div className="text">
          <h1 className="font-bold text-xl md:text-2xl text-center mt-6 capitalize">
            Best Strategy to achieve Profiable harvet{" "}
          </h1>
          <p className="mt-6 text-gray-800 text-center md:w-[70%] mx-4  md:m-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites
          </p>
        </div>
      </div>
      <div className="image mt-6 relative w-[90%]">
        <Image
          src="/1.webp"
          alt="hero"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="data">
        <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">
            Achieve a profitable harvest
          </h1>

          <p className="mb-4 text-sm">
            Achieving a profitable harvest involves a series of strategic steps
            that include selecting plant varieties that suit environmental
            conditions, efficient crop management, use of appropriate
            agricultural technology, choosing optimal harvest times, as well as
            effective marketing and distribution strategies to increase the
            selling value of the harvest.
          </p>

          <p className="mb-6 text-sm">
            We have a way to achieve profitable harvests for farmers and
            agricultural actors through a holistic approach, including selecting
            the right plant varieties, efficient crop management, application of
            the latest agricultural technology, choosing optimal harvest times,
            and effective marketing and distribution strategies.
          </p>

          <ol className="space-y-6">
            <li>
              <h2 className="text-xl font-semibold mb-2">
                1. Selection of the Right Varieties and Seeds
              </h2>
              <p className="text-sm">
                Selecting the right varieties and seeds is a key step in
                achieving a successful harvest. This includes in-depth research
                into varieties suited to environmental, climate and soil
                conditions, as well as selecting high-quality seeds that can
                provide optimal results. By paying attention to these factors,
                farmers can increase their chances of achieving a profitable
                harvest.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-2">
                2. Efficient Crop Management
              </h2>
              <p className="text-sm">
                Efficient plant management involves regular plant maintenance,
                application of appropriate fertilizer according to plant needs,
                effective pest and disease control, and regular monitoring of
                plant growth and health. By managing crops well, farmers can
                increase the productivity, quality and profits of their crops.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-2">
                3. Use of Agricultural Technology
              </h2>
              <p className="text-sm mb-2">
                Utilization of agricultural technology involves the use of
                various advanced tools and technologies such as soil sensors,
                automatic irrigation systems, agricultural management software
                applications, and other technologies that can increase
                efficiency in agricultural processes.
              </p>
              <p className="text-sm">
                By implementing this agricultural technology, farmers can
                monitor soil and plant conditions accurately, optimize the use
                of resources such as water and fertilizer, and increase
                productivity and quality of harvest. This helps create a more
                sustainable and profitable agricultural environment for farmers.
              </p>
            </li>

            <li>
              <h2 className="text-xl font-semibold mb-2">
                4. Choosing the Right Harvest Time
              </h2>
              <p className="text-sm">
                Choosing the right harvest time involves careful monitoring of
                crop maturity, weather conditions, and other factors that can
                affect crop quality and yield. By determining the optimal
                harvest time, farmers can ensure that their crops are harvested
                under the best conditions to achieve maximum and profitable
                yields.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="more mt-6">
        <div className="flex justify-between  items-center mb-6">
          <h2 className="font-bold text-2xl"> Related Article</h2>
          <Button className="rounded-full"> View All Articles</Button>
        </div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 containerx">
          <BlogCard image={"/3.jpeg"} />
          <BlogCard image={"/2.webp"} />
          <BlogCard image={"/4.webp"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
