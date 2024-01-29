export const VideoAnimation = () => {
  return (
    <>
      <picture>
        <source
          media="(max-width: 499px)"
          srcSet="https://res.cloudinary.com/duko2tssr/image/upload/c_scale,q_100,w_700/v1706540494/People_walking_optimized_1_wp73wg.gif"
          className="md:mx-auto -ml-16 pointer-events-none max-w-[1000px] min-w-[600px] w-full self-end"
        />
        <source
          media="(min-width: 500px)"
          srcSet="https://res.cloudinary.com/duko2tssr/image/upload/c_scale,q_100,w_1000/v1706540494/People_walking_optimized_1_wp73wg.gif"
          className="md:mx-auto -ml-16 pointer-events-none max-w-[1000px] min-w-[600px] w-full self-end"
        />
        <img
          srcSet="https://res.cloudinary.com/duko2tssr/image/upload/c_scale,q_100,w_700/v1706540494/People_walking_optimized_1_wp73wg.gif"
          alt="people walking to the conference"
          className="md:mx-auto -ml-16 pointer-events-none max-w-[1000px] min-w-[600px] w-full self-end"
        />
      </picture>
    </>
  );
};
