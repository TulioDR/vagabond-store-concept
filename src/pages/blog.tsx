import BlogPost from "@/components/Home/Blog/BlogPost";
import Subtitle from "@/components/Subtitle";

export default function Blog() {
   return (
      <div className="space-y-10">
         <div className="flex items-end justify-between">
            <Subtitle>Blog</Subtitle>
            <button className="grid place-content-center aspect-square">
               <span className="material-icons !text-5xl">filter_alt</span>
            </button>
         </div>
         <div className="grid lg:grid-cols-2 gap-10">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
         </div>
      </div>
   );
}
