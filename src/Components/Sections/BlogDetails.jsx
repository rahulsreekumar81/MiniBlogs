import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
const BlogDetails = () => {
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleDelete = () => {
    setIsPending(true);
    fetch(`http://localhost:8000/blogs/` + blog.id, { method: "DELETE" }).then(
      () => {
        navigate("/");
        setIsPending(false);
        console.log("Blog is deleted");
      }
    );
  };
  return (
    <div className="blog-details">
      {isLoading && <span>Loading please wait...</span>}
      {error && <span style={{ color: "Red" }}>{error}</span>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p style={{ color: "Black", fontSize: "20px" }}>
            {" "}
            Written By :{blog.author}
          </p>
          <div>{blog.body}</div>

          {!isPending ? (
            <button onClick={handleDelete}>Delete</button>
          ) : (
            <button disabled> Deleting</button>
          )}
          {/* {!isPending && <button onClick={handleDelete}>Delete</button>} 
          {isPending && <button>Deleting...</button>} */}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
