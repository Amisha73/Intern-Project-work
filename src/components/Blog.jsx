import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg",
    category: "Canada",
    title: "T-shirt design is the part of design",
    readTime: "2 min",
  },
  {
    image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-02.jpg",
    category: "Development",
    title: "The services provide for design",
    readTime: "2 hour",
  },
  {
    image: "https://rainbowit.net/html/inbio/assets/images/blog/blog-03.jpg",
    category: "Application",
    title: "Mobile app landing design & app maintain",
    readTime: "5 min",
  },
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mb-24 mt-10">
      <div className="text-center mb-8">
        <p className="text-center text-[16px] text-pink-600 uppercase">
          Visit My Blog and Keep Your Feedback
        </p>
        <h1 className="text-center text-[30px] font-bold text-gray-700 sm:text-[60px]">
          My Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            readTime={blog.readTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
