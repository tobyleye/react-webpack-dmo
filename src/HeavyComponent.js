import React from 'react'

export default function Heavy() {
  let renderLorem = ({key}) => {
    return (
      <p key={key}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat
        iusto nostrum minima modi sapiente, possimus praesentium corporis ullam
        obcaecati dolores id. Dicta iure est distinctio. Vero repellendus
        placeat eos? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis sequi vel ullam beatae ducimus doloremque aperiam vero
        consequatur culpa esse quidem quas amet, incidunt a, corporis error
        impedit totam quisquam. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Explicabo nihil non sint necessitatibus, accusamus
        consequuntur enim sed veritatis quo labore dolore obcaecati aliquid quas
        libero quam, voluptate, laudantium totam itaque?
      </p>
    );
  };
  return (
    <div>
        {Array(20).fill().map((_,index) => {
            return renderLorem({ key: index })
        })}
    </div>
  );
}
