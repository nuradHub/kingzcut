import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AOS from "aos";
import "./Blogs.css";
import "aos/dist/aos.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function requestFunction() {
      try {
        const response = await axios.get("/api/news");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching barber posts:", error);
        toast.error(error.message);
      }
    }
    requestFunction();

    AOS.init({
      duration: 2000,
      once: false,
      delay: 1000,
    });
  }, []);

  return (
      <section
        className="blogs-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="blogs-header">
          <p data-aos="fade-up" data-aos-delay="300">
            From Blog
          </p>
          <h4 data-aos="fade-up" data-aos-delay="500">
            A Good Newspaper Is A <br /> Nation Talking To Itself
          </h4>
        </div>
        <div className="blogs-post" data-aos="fade-up" data-aos-delay="700">
          {blogs?.articles &&
            [
              ...blogs.articles.sort((a, b) => b.publishedAt - a.publishedAt),
            ].map((blog, index) => (
              <div className="post" key={index}>
                <div className="post-image">
                  <img src={blog.urlToImage} alt="" />
                </div>
                <div className="post-content">
                  <h1>{blog.title}</h1>
                  <summary>{blog.description}</summary>
                </div>
                <a href={blog.url}>
                  <button>Read More</button>
                </a>
              </div>
            ))}
        </div>
      </section>
  );
};
export default Blogs;
