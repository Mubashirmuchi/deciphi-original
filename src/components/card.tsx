import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CMSBlogPost } from "@/lib/cms";

const BlogCard = ({ post }: { post: CMSBlogPost }) => {
  // Generate initials from author name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word: string) => word[0])
      .join("")
      .toUpperCase();
  };
  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg w-full max-h-[500px]">
        {/* Featured Image */}
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          {post.featuredImage.url ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Categories */}
          {/* {post.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category: string) => (
                <span
                  key={category}
                  className="mb-4 rounded-full bg-[#2B71FA1A] py-0.5 px-2.5 border border-transparent text-xs text-[#2B71FA] font-semibold transition-all shadow-sm w-fit text-center"
                >
                  {category}
                </span>
              ))}
            </div>
          )} */}

          {/* Title */}
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {post.title}
          </h6>

          {/* Excerpt */}
          <p className="text-slate-600 leading-normal font-light line-clamp-3 min-h-[4.5rem]">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4">
          {/* <div className="flex items-center">
            <Avatar>
              <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">
                {post.author.name}
              </span>
              <span className="text-slate-600">
                {formatDate(post.publishedAt)}
              </span>
            </div>
          </div> */}
          <span className="text-blue-600 hover:text-blue-800 font-medium">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
