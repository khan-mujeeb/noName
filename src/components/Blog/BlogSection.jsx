import React, { useState } from "react";
import PageTitle from "../PageTitle";
import blogData from "../../data/blogData";

const BlogSection = () => {
    const [showMore, setShowMore] = useState(false);
    const [displayCount, setDisplayCount] = useState(4); // Number of articles initially displayed

    const toggleShowMore = () => {
        setShowMore(!showMore);
        // Change the number of displayed articles based on the current state
        setDisplayCount(showMore ? 4 : blogData.length);
    };

    return (
        <div className="w-full flex justify-center items-center flex-col mt-28 gap-14">
            <PageTitle title="Blog" subTitle="Latest Articles" />
        
            <div className="grid grid-cols-1 xl:max-3xl:grid-cols-3 sm:max-xl:grid-cols-2 max-w-5xl gap-4 transition-all duration-500">
                {
                    blogData.slice(0, displayCount).map((blog) => { // Display based on displayCount
                        return (
                            <div key={blog.id} className=" z-20 w-80 hover:bg-slate-300 rounded-lg shadow-lg backdrop-blur-sm flex flex-col items-center justify-center">
                                <img src={blog.img} alt={blog.title} className=" w-72 h-48 object-cover rounded-t-lg" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                                    {/* Additional content for the blog post */}
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            {blogData.length > 4 && ( // Show the button only if there are more than 6 blog posts
                <button onClick={toggleShowMore} className="mt-4 text-blue-500 border border-blue-500 p-4 rounded-lg backdrop-blur-lg">
                    {showMore ? "Show Less" : "Show More"}
                </button>
            )}

        </div>
    );
};

export default BlogSection;
