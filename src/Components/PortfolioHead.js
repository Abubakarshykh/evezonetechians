import Image from "next/image";

const headingText = [
  "Quality Assurance",
  "Quality Control and",
  `Testing \u2014 the Basics`, // Unicode for em dash (—)
  "of Software Quality",
  "Management",
];


export default function PortfolioHead() {
  return (
    <>
      <section className="flex px-10 md:px-26 w-full space-x-0 md:h-screen md:mt-20 mt-20 md:py-[20rem] md:items-center">
        {/* Text area */}
        <div className="md:w-[50%]">
          <div className="md:text-4xl text-3xl text-white font-bold md:leading-15">
            <h1 className="text-[#FFAD00] md:text-6xl font-bold my-6">
              QA Portfolio
            </h1>
            {headingText.map((text, index) => (
              <span key={index}>
                {text}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Image area */}
        <div className="hidden md:block md:w-[50%] h-[500px] relative ml-[-2rem]">
          <Image
            src="/Portfolio/portfolio_headnew.png"
            alt="Soldier Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        
      </section>
    </>
  );
}
