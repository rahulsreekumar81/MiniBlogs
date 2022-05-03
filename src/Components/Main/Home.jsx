import React from "react";
import Bloglist from "../Sections/Bloglist";
import useFetch from "../../Hooks/useFetch";
const Home = () => {
  // Custom Hook is created to fetch the dta from the server.
  const {
    data: blogs, // using the 'data' but naming it as blogs for this context
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs`);

  // const [blogs, setBlogs] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(`http://localhost:8000/blogs`)
  //       .then((res) => {
  //         // console.log(res);
  //         if (!res.ok) {
  //           //If the res.ok is false throw the error message
  //           throw Error(`Could not fetch the data from the resource,Sorry..!!`);
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data); // Setting the blogs from the fetch.
  //         setError(null); //If the fetch is successfull the set Error state into null.
  //         setIsLoading(false); // If the fetch is successfull then isLoading into false
  //       })
  //       .catch((error) => {
  //         setError(error.message); //Catching the error from the conditonal statement as well as
  //         //any netwrok error is setted into error state
  //         setIsLoading(false); // If any error is present then there is no point of isLoading state,
  //         //so setting isLoading into false
  //         console.log(error.message);
  //       });
  //   }, 2000);
  // }, []);
  // const handleDeleteBlogs = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  return (
    <div className="home">
      {/* If isLoading is true then display the Span element in DOM  */}
      {isLoading && <span>Loading Please wait for a moment...</span>}

      {error && <span style={{ color: "red" }}>{error}</span>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title="All Blogs"
          //handleDeleteBlogs={handleDeleteBlogs}
        />
      )}
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's Blog"
      /> */}
    </div>
  );
};

export default Home;
