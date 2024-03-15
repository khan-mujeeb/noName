
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Carosal = ({ data }) => {
    
    return (
        <Carousel
        showIndicators={false}
        showStatus={false}
        
        autoPlay={true}
        listRef={false}
        itemsRef={false}
        interval={2000}
        labels={{
            leftArrow: "Previous slide",
            rightArrow: "Next slide",
            item: "slide",
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        left: "1%",
                        top: "50%",
                        zIndex: "1",
                        position: "absolute",
                        cursor: "pointer",
                        fontSize: "2rem",
                        color: "blue",
                        backgroundColor: "transparent",
                        border: "none",
                    }}
                >
                    {"<"}
                </button>
            )
        }

        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        right: "1%",
                        top: "50%",
                        zIndex: "1",
                        position: "absolute",
                        cursor: "pointer",
                        fontSize: "2rem",
                        color: "blue",
                        backgroundColor: "transparent",
                        border: "none",
                    }}
                >
                    {">"}
                </button>
            )
        }
            className="rounded-xl lg:max-3xl:w-[700px] w-96"
            showThumbs={false}
            autoplay={true}
            slideRef={false}
            infiniteLoop={true}
            loop={true}
        >
            {data.map((project) => (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer" 
                    className=" gap-7 flex  flex-col justify-center items-center w-full lg:max-3xl:p-20 p-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  rounded-xl backdrop-blur-sm"
                    key={project.id}
                >
                    <img
                        className="lg:max-3xl:max-w-[180px] lg:max-3xl:max-h-[180px] max-w-[120px] max-h-[120px]  aspect-square lg:max-3xl:w-32"
                        src={project.img}
                        alt={project.name}
                    />
                    <div className=" dark:text-white flex flex-col gap-10 justify-center items-center">
                        <h2 className=" text-3xl font-bold">{project.name}</h2>
                        <p className="dark:text-gray-300 lg:max-3xl:text-md text-sm ">
                            {project.desc}
                        </p>
                    </div>
                    {/* Additional project details or components */}
                </a>
            ))}
        </Carousel>
    );
};

export default Carosal;
