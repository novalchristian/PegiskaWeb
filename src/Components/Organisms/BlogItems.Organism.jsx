import React from "react";
import { BlogItemMolecules } from "../Molecules";

function BlogItemsOrganism(props) {
  const isHome = props.isHome
  return (
    <div className="flex flex-wrap justify-start items-start">
      {isHome ? 
        <>
          {props.data.slice(0, 3).map((data) => (
            <BlogItemMolecules
              image={data.image}
              title={data.title}
              subTitle={data.subTitle}
            />
          ))}
        </>
      : 
        <>
          {props.data.map((data) => (
            <BlogItemMolecules
              image={data.image}
              title={data.title}
              subTitle={data.subTitle}
            />
          ))}
        </>
      }
      
    </div>
  );

}

export default BlogItemsOrganism;


