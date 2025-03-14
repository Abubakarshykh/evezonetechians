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
      <section className="flex px-26 w-full space-x-0 h-screen mt-20 py-[20rem] items-center">
        {/* Text area */}
        <div className="w-[50%]">
          <div className="text-4xl text-white font-bold leading-15">
            <h1 className="text-[#FFAD00] text-6xl font-bold my-6">
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
        <div className="w-[50%] h-[500px] relative ml-[-2rem]">
          <Image
            src="/Portfolio/Portfolio_headnew.png"
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
