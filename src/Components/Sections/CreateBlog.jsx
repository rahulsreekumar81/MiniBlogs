import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    // console.log(blog);
    setIsPending(true);
    fetch(`http://localhost:8000/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog is added");
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog Content:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>BLog Author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Mario"> Mario</option>
          <option value="Yoshi"> Yoshi</option>
          <option value="Luigi"> Luigi</option>
        </select>
        {!isPending ? (
          <button>Add Blogs</button>
        ) : (
          <button disabled>Adding..Blog!</button>
        )}
        {/* {!isPending && <button>Add Blog</button>} 
        {isPending && <button disabled>Adding Blog...</button>} */}
      </form>
    </div>
  );
};

export default CreateBlog;
