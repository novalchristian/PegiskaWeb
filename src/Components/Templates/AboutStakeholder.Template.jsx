import React from 'react'
import { EmptyPerson } from '../../Assets/Img';
import { TitleLightMolecules } from '../Molecules';

export default function AboutStakeholderTemplate(props) {
  return (
    <div className="md:pt-12 pt-16 md:pb-10 flex justify-center bg-gray-50">
      <div className="">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center max-w-[1350px]">
            <TitleLightMolecules
              titleEng="Stakeholders"
              titleInd="Pemegang Jabatan"
              subTitle="Kenalan yuk dengan pemegang jabatan yang ada di PT Pegiska Berkat Abadi."
            />
            <div className="flex flex-wrap items-center justify-center mt-4 md:mt-0">
              {props.EmployeeData.map((data) => (
                <div
                  className="w-2/4 lg:w-1/3 flex-col flex justify-center mt-4"
                  key={data.id}
                >
                  <div className="md:mt-16 md:px-3 md:mx-10 mx-4  flex justify-center md:static bg-blue md:rounded-[30px] rounded-[12px] shadow-Four">
                    {data.img ? (
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-3/4 md:w-full duration-300 mt-3 md:mt-[-10px] md:pt-2"
                      />
                    ) : (
                      <img
                        src={EmptyPerson}
                        alt={data.name}
                        className="w-3/4 md:w-full duration-300 mt-3 md:mt-[-10px] md:pt-2"
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start md:mt-6 md:px-3 md:mx-10 mx-5 mt-4">
                    <h3 className="font-medium md:text-[22px] text-[14px]">
                      {data.name}
                    </h3>
                    <p className="mt-1 md:text-base text-xs">{data.as}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
