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
         className={`relative w-full md:w-[1200px] h-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-12 rounded-xl overflow-hidden ${project.bgColor}`}
         style={{ boxShadow: "3px 10px 12px 5px rgb(8, 8, 8)" }}
       >
         {/* Background Image (Fixed) */}
         <Image
           src="/images/footer_bg.png"
           width={220}
           height={150}
           alt="Background Image"
           className="absolute right-20 bottom-0  opacity-90 mix-blend-normal pointer-events-none object-cover"
         />
       
         {/* Logo Section */}
         <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
           <Image
             src={project.logo}
             alt="Project Logo"
             width={280}
             height={200}
             className="object-contain"
           />
         </div>
       
         {/* Text Content Section */}
         <div className={`w-full md:w-2/3 ${project.textColor} text-center md:text-start md:pl-20`}>
           <h1 className="text-xl md:text-3xl font-bold">{project.name}</h1>
           <p className="text-sm md:text-lg mt-2 leading-normal" dangerouslySetInnerHTML={{ __html: project.description }} />
           <div className="mt-4 flex justify-center md:justify-start">
             <button className={`px-6 py-2 rounded-full tracking-wider font-medium ${project.buttonBg} hover:bg-red-600 transition`}>
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
