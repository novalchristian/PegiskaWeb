import React from 'react'
import { BlogItemMolecules } from '../Molecules';

function BlogItemsOrganism(props) {
  return (
    <div className="flex flex-wrap justify-center items-start">
      {props.data.slice(0, 3).map((data) => (
        <BlogItemMolecules
          image={data.image}
          title={data.title}
          subTitle={data.subTitle}
        />
      ))}
    </div>
  );
}

export default BlogItemsOrganism