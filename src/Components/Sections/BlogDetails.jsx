import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isLoading && <span>Loading please wait...</span>}
      {error && <span style={{ color: "Red" }}>{error}</span>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
