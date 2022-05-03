import React from "react";

const Bloglist = ({ blogs, title }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   console.log(props, blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button
            onClick={() => {
              handleDeleteBlogs(blog.id);
            }}
          >
            Delete Blogs
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
