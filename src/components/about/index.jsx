import React from "react";
import clsx from "clsx";
const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        " cusom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
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
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Software engineer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            young ambitious engineer, passionate about software engineering ,
            with a spirit of initiative and analysis. I have accumulated several
            professional experiences acquired through my internships, academic
            projects, personal and certifications in the field, I am now open to
            work in the field of web development with the stack (java/ angular),
            disponibility from now on. My goal is to continue my career in this
            field by putting my skills and passion for IT into practice.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=mounirAitsliman&theme=transparent&title_color=FEFE5B&hide_border=true&text_color=FFFFFF&text_bold=false"
            alt="Mounir Ait Sliman"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=mounirAitsliman&theme=transparent&title_color=FEFE5B&hide_border=true&text_color=FFFFFF&text_bold=false"
            alt="Mounir Ait Sliman"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full !p-0"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=java,spring,ts,js,angular,react,html,css,graphql,kafka,npm,maven,figma,idea,vscode,kubernetes,docker,aws,linux,windows,bash,github,gitlab,postman,nodejs,mysql,postgres,mongodb,py,redis,cpp"
            alt="Mounir Ait Sliman"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=mounirAitsliman&theme=dark&hide_border=true&type=png&background=220C0C00&ring=FEFE5B&currStreakNum=FEFE5B"
            alt="mounirAitsliman"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=mounirAitsliman&repo=TransfertNationalBackend&theme=transparent&title_color=FEFE5B&hide_border=true&text_color=FFFFFF&text_bold=false&description_lines_count=2"
            alt="mounirAitsliman"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
