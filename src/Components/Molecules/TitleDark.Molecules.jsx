import React from 'react'

function TitleDarkMolecules(props) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h4 className="mb-2 text-base font-bold text-primary uppercase">
        {props.titleEng}
      </h4>
      <h2 className={"mb-4 text-2xl font-bold text-white md:text-[2.5rem]"}>
        {props.titleInd}
      </h2>
      <p className="font-light text-[#F6F6F6] text-sm md:text-xl text-[14px] md:max-w-[700px]">
        {props.subTitle}
      </p>
    </div>
  );
}

export default TitleDarkMolecules