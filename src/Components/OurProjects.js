"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Our_projects({ showAll = false }) {
  const router = useRouter();

  const projects = [
    {
      name: "Quality Assurance",
      description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
      logo: "/images/projects_2.png",
      bgColor: "bg-[#222222]",
      textColor: "text-[#FFAD00]",
      buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
    },
    {
      name: "Quality Assurance",
      description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
      logo: "/images/projects_2.png",
      bgColor: "bg-[#222222]",
      textColor: "text-[#FFAD00]",
      buttonBg: "shadow-xl text-[#222222] bg-[#FFAD00]",
    },
  ];

  if (showAll) {
    projects.push(
      {
        name: "Quality Assurance",
        description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
        logo: "/images/projects_2.png",
        bgColor: "bg-[#FFAD00]",
        textColor: "text-white",
        buttonBg: "shadow-xl bg-[#222222]",
      },
      {
        name: "Quality Assurance",
        description: "Delivering excellence through innovation,<br />strategy, and unwavering commitment.",
        logo: "/images/projects_2.png",
        bgColor: "bg-[#222222]",
        textColor: "text-white",
        buttonBg: "shadow-xl bg-[#FFAD00]",
      }
    );
  }

  return (
    <section className="w-full py-16 px-6 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold tracking-wider uppercase opacity-80">
          Our Projects
        </h2>
        <h3 className="text-lg font-bold">
          We’re Dedicated to Exceeding Your Expectations
        </h3>
      </div>

      <div className="space-y-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-full md:w-[1200px] h-[300px] flex flex-col shadow-xl md:flex-row items-center justify-between p-8 md:p-12 rounded-xl ${project.bgColor}`}
            style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
          >
            <Image
              src="/images/footer_bg.png"
              width={250}
              height={200}
              alt="Background Image"
              className="absolute right-5 bottom-3 opacity-150 mix-blend-normal pointer-events-none"
            />

            <div className="w-1/3 flex justify-center">
              <Image
                src={project.logo}
                alt="Project Logo"
                width={280}
                height={200}
                className="object-contain"
              />
            </div>

            <div className={`w-2/3 ${project.textColor} text-start pl-20`}>
  <h1 className="text-2xl md:text-3xl font-bold">{project.name}</h1>
  
  {/* Ensure description has proper spacing */}
  <p className="text-lg mt-2 leading-normal" dangerouslySetInnerHTML={{ __html: project.description }} />

  {/* Ensure the button stays on a separate line */}
  <div className="mt-4">
    <button
      className={`px-6 py-1 rounded-full tracking-wider font-medium ${project.buttonBg} hover:bg-red-600 transition block`}
    >
      GitHub
    </button>
  </div>
</div>

          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-8 text-center">
          <button
            className="px-6 py-1 w-[135px] text-lg font-semibold bg-[#FFAD00] text-[#222222] rounded-full shadow-lg cursor-pointer hover:bg-yellow-500 transition"
            onClick={() => router.push("/portfolio")}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}
