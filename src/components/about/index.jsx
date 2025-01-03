import React from "react";
import clsx from "clsx";
const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        " cusom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-2xl text-left w-full capitalize">
            Software engineer
          </h2>
          <p>
            young ambitious engineer, passionate about software engineering ,
            with a spirit of initiative and analysis. I have accumulated several
            professional experiences acquired through my internships, academic
            projects, personal and certifications in the field, I am now open to
            work in the field of web development with the stack (java/ angular),
            disponibility from now on. My goal is to continue my career in this
            field by putting my skills and passion for IT into practice.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
