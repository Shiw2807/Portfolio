/** @format */

import Repo from "../assets/icons/Repository.png";

function Card(props) {
  return (
    <>
      <div className="flex px-4  pt-8 md:pt-14 w-full items-center lg:items-end  ">
        <div className="flex lg:w-1/2 w-full flex-col items-center lg:items-end">
          {/* Project Title */}
          <p className="text-2xl text-center lg:text-right font-light px-3">
            {props.title}
          </p>
          <hr className="md:w-64 -mr-4 h-0.5 my-4 bg-black border-0" />
          {/* Project Description */}
          <p className="text-lg text-justify lg:text-right md:text-center font-light px-3 md:w-full w-64 ">
            {props.desc}
            <br />
          </p>
          {/* Project Tech Stack  */}
          <div className="flex w-full font-regular   mt-10 justify-center lg:justify-end px-3">
            <p className="w-fit border bg-[#F0F0F0] rounded-md px-2 py-1">
              {props.tech}
            </p>
          </div>
          <span className="flex space-x-4 justify-center lg:justify-end my-4 px-3">
            <a href={props.gitlink}>
              <img src={Repo} alt=""/>
            </a>
          </span>
        </div>
        <div className="hidden lg:flex w-[750px] h-[450px] ">
          <img src={props.img} alt=""/>
        </div>
      </div>
    </>
  );
}

export default Card;
