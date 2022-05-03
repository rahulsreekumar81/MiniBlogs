import { useState } from "react";
const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [blogbody, setBLogBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  return (
    <div className="create">
      <h2>Add Blog</h2>
      <form>
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
          value={blogbody}
          onChange={(event) => setBLogBody(event.target.value)}
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
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
