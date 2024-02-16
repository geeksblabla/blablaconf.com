"use client";
import { SVGProps, useState } from "react";

type CityType = {
  name: string;
  date: string;
  place: string;
};

const cities: CityType[] = [
  {
    name: "Marrakech",
    date: "February 24, 1pm",
    place: "Cité d’Innovation de Marrakech",
  },
  {
    name: "Casablanca",
    date: "February 25, 1pm",
    place: "TechnoPark Casablanca",
  },
  {
    name: "Rabat",
    date: "March 2, 1pm",
    place: "TBD",
  },
  {
    name: "khouribga",
    date: "March 3, 1pm",
    place: "1337 School",
  },
] as const;

export const InPersonDays = () => {
  const [selectedCity, setSelectedCity] = useState<CityType>(cities[0]);
  return (
    <div
      id="in-person-days"
      className="relative md:mx-auto mx-3 sm:max-w-xl md:max-w-screen-lg flex md:flex-row flex-col-reverse items-center my-16 min-h-[490px] "
    >
      <div className=" bg-[#E5D1C3] w-full py-8 px-8 rounded-3xl">
        <h1 className="md:text-4xl text-2xl font-bold text-gradient  capitalize ">
          in 4 different locations in Morocco
        </h1>

        <div className="mt-8">
          {cities.map((city, index) => (
            <button
              key={`city${index}`}
              onClick={() => setSelectedCity(city)}
              className={`${
                city.name === selectedCity.name
                  ? `bg-white border-white`
                  : `bg-transparent border-[#835E47] border`
              } py-1 px-6 mr-3 rounded-full my-1`}
            >
              {city.name}
            </button>
          ))}
        </div>
        <div className="my-4">
          <p className="text-lg">
            <strong className="">Location</strong> : {selectedCity.place}
          </p>
          <p className="text-lg">
            <strong className="">Time</strong> : {selectedCity.date}
          </p>
        </div>
      </div>
      <div className="md:absolute md:right-6 ">
        <Map />
      </div>
    </div>
  );
};

const Map = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="md:w-[466px] md:h-[485px] w-[300px] h-[300px] max-w-[94vh]"
    viewBox="0 0 466 485"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        stroke="#3F2C30"
        strokeMiterlimit={10}
        d="M401.844 53.084v2.096l6.298 2.697.503 2.4 4.498 2.697-1.799 4.496 3.903 3.9-2.203 4.199 3.202 7.398-.255 10.095-2.246 2.096 3.698 2.697-1.459 9.897 4.456 6.294-1.799 3.695 4.498 5.699 9.698 6.598-3.598 3.101-1.8.85-1.7 5.55 3.301 2.095-2.203 1.6-17.959-2.598-23.548 1.579 1.304 8.814-20.602 4.538v7.738l-2.699 2.633-.602 6.011 2.097-1.827 1.8 1.827.396-1.629 2.303 4.34-.9 3.065-1.998 1.785 1.7 2.796-7.197 2.895-10.804 2.599-7.403 7.299-16.457 10.895-7.02 12.538-5.299-.815.942-3.143-18.433 1.062-7.007 3.554-8.529-2.386-6.568 4.481h-6.375l-.957 2.938-14.643 8.921-1.559.439-3.499 4.198-5.207 2.499-.284 75.842-82.829-.219v70.568s-13.971 4.177-14.141 4.254c-.17.078-13.148 9.069-13.148 9.069l-1.7 5.494s2.6 17.493 3.003 20.587c.397 3.101 1.198 17.09 1.198 17.09l-96.734.294c-.618.002-1.201.288-1.542.803-1.328 2.01-2.937 5.053-2.937 2.438 0-1.833 1.538-2.611 1.296-4.937-.199-1.904 1.686-.502 1.495-3.901-.192-3.398 0-6.293 0-6.293l1.105-.899-.298-1.699s.602-.199.999-.602c.397-.404.701-5.296.701-5.296l6.298-5.196 2.7.099.998-1.996.1-2.301 2.401-2.598v-1.402l.8-5.897 1.502-1.997 1.998.298v-1.798l1-.397.51-3.101-1.51-.934 1.51-2.379 1.388-1.685.503-1.458 1.997-2.039.1-4.106 3.3-2.492.2-1.798 2.203-1.997-.298-3.794 2.897-2.754 1.8-.46-.198-1.685 9.301-9.097.1-1.799 1.6-.099.9-1.196 1.502.198 2.402-2.796 1.197-1.197.503-2.513.8-1.104.602-7.469-.502-.807.099-5.494 4.002-8.106.1-3.752 3.903-7.03.503-4.099 1.728-2.301s20.191-12.092 20.736-12.594c.546-.503 4.364-11.993 4.4-12.29.035-.297 4.64-11.858 4.64-11.858v-2.386l2.401-2.039h1.417l4.152-6.931 8.635-1.033 5.094-.531 1.764-1.388 5.845-.495 14.905-7.016 3.301-5.827 5.377-4.764 2.338-3.002 9.096-3.299 11.101-11.681 7.226-12.538 6.15-9.529 1.098-9.359-6.079-6.739.907-22.11s3.946-7.136 4.074-7.567c.127-.432 5.313-8.262 5.313-8.262l3.159-3.526 1.453-3.285-.298-10.145 10.102-9.691.999-2.273 4.825-9.217 17.378-6.598s12.404-7.094 12.9-7.3c.496-.205 14.105-7.695 14.105-7.695l6.199-5.6 6.9-21.486 7.601-14.194 1.8-9.996.503-3.101 5.1-.503L320.353 29l4.803.7s.397 7.095.602 7.3c.206.205 4.003 5.897 4.003 5.897l8.699 4.998 5.604 3.696 6 .099 3.401-.8 2.302-1.098 7.701.701 2.501-3.1s4.498 4 4.902 3.794c.404-.205 6.9-.8 6.9-.8l6.999-6.499 1.403 7.894 7.998 1.5 3.103-1.196 4.598.998h-.028Z"
      />
    </g>
    {/* cities here */}
    <g className="group" name="casa">
      <text
        x={170}
        y={100}
        textAnchor="left"
        stroke="black"
        strokeWidth="1px"
        className="opacity-0 group-hover:opacity-100 bg-white transition-all duration-300"
      >
        Casablanca
      </text>
      <circle
        cx={268}
        cy={100}
        r={6}
        fill="black"
        className="cursor-pointer hover:stroke-[6px] hover:stroke-current hover:text-[#835E47] transition-all duration-300"
      />
    </g>

    <g className="group" name="khouribga">
      <text
        x={300}
        y={130}
        textAnchor="left"
        stroke="black"
        strokeWidth="1px"
        className="opacity-0 group-hover:opacity-100 bg-white transition-all duration-300"
      >
        Khouribga
      </text>
      <circle
        cx={288}
        cy={130}
        r={4}
        fill="black"
        className="cursor-pointer hover:stroke-[6px] hover:stroke-current hover:text-[#835E47] transition-all duration-300"
      />
    </g>
    <g className="group" name="rabat">
      <text
        x={240}
        y={85}
        textAnchor="right"
        stroke="black"
        strokeWidth="1px"
        className="opacity-0 group-hover:opacity-100 bg-white transition-all duration-300"
      >
        Rabat
      </text>
      <circle
        cx={291}
        cy={85}
        r={4}
        fill="black"
        className="cursor-pointer hover:stroke-[6px] hover:stroke-current hover:text-[#835E47] transition-all duration-300"
      />
    </g>
    <g className="group" name="kech">
      <text
        x={280}
        y={165}
        textAnchor="right"
        stroke="black"
        strokeWidth="1px"
        className="opacity-0 group-hover:opacity-100 bg-white transition-all duration-300"
      >
        Marrakech
      </text>
      <circle
        cx={260}
        cy={160}
        r={4}
        fill="black"
        className="cursor-pointer hover:stroke-[6px] hover:stroke-current hover:text-[#835E47] transition-all duration-300"
      />
    </g>
    {/* <g className="group" name="agadir">
      <text
        x={228}
        y={195}
        textAnchor="right"
        stroke="black"
        strokeWidth="1px"
        className="opacity-0 group-hover:opacity-100 bg-white transition-all duration-300"
      >
        Agadir
      </text>
      <circle
        cx={218}
        cy={195}
        r={4}
        fill="black"
        name="agadir"
        className="cursor-pointer hover:stroke-[6px] hover:stroke-current hover:text-[#835E47] transition-all duration-300"
      />
    </g> */}

    <defs>
      <linearGradient
        id="b"
        x1={354.43}
        x2={100.43}
        y1={53.125}
        y2={441.625}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6D1C3" />
        <stop offset={1} stopColor="#EDE0D7" />
      </linearGradient>
      <filter
        id="a"
        width={465.158}
        height={483.539}
        x={0.5}
        y={0.475}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={16} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.647059 0 0 0 0 0.47451 0 0 0 0 0.372549 0 0 0 0.16 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_522_5253"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_522_5253"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
