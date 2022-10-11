import React from 'react'
import { ExperienceOrganism } from '../Organisms';

function ExperienceTemplate(props) {
  return (
    <div className="md:pt-12 pb-10 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center max-w-4xl ">
            <div className="pb-10">
              <p className="mt-10 text-dark text-lg md:text-2xl font-medium">
                Dengan pengalaman lebih dari 25 tahun, <br />
                kami telah mendapatkan banyak customer dan importir{" "}
                <br className="hidden md:inline-flex" />
                dari berbagai daerah.
              </p>
            </div>
            <ExperienceOrganism company={props.company} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTemplate