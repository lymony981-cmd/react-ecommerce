import { useState } from "react";
function About() {

  return (
    <div className="max-w-[90%] lg:max-w-5xl mx-auto py-10 font-jost">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 items-start px-4 lg:px-0">
        <div >
          <img
            className="w-full h-full"
            src="./image/about_us.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, autem. Laboriosam odit molestiae, eos et quas quos
            facere dolores dolorem ratione similique cumque tempore voluptatem
            expedita earum suscipit ipsum debitis dicta dignissimos ullam id.
            Placeat nostrum provident eos tempore eius omnis obcaecati quas
            pariatur, velit esse molestiae cumque quam maxime soluta dignissimos
            corporis totam ea non impedit ex doloribus ratione ipsam temporibus
            expedita? Asperiores modi neque quisquam ratione corporis sed,
            eveniet dolor obcaecati atque delectus esse pariatur dignissimos
            aliquid iusto voluptate reiciendis recusandae veritatis consequatur
            sit reprehenderit repudiandae! Quo obcaecati rem deserunt nisi ut
            accusamus at dolorum assumenda temporibus quibusdam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
