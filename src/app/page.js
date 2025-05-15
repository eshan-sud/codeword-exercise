import Image from "next/image";
import "./globals.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "UX Designer",
    bio: "Alex has 5 years of experience creating beautiful, intuitive interfaces.",
    skills: ["Figma", "User Research", "Prototyping"],
    // imageUrl: "/api/placeholder/400/400",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sam Taylor",
    role: "Frontend Developer",
    bio: "Sam specializes in building performant React applications with modern tooling.",
    skills: ["React", "TypeScript", "Next.js"],
    // imageUrl: "/api/placeholder/400/400",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Jordan Smith",
    role: "Product Manager",
    bio: "Jordan excels at coordinating between teams and keeping projects on track.",
    skills: ["Agile", "Roadmapping", "User Stories"],
    // imageUrl: "/api/placeholder/400/400",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4">
      <div className="bg-black text-center mb-10">
        <h1 className="text-4xl text-center font-bold mb-2">Meet Our Team</h1>
        <p className="text-center text-lg text-gray-400">
          Hover over a card to learn more
        </p>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent className="flex-nowrap overflow-x-auto whitespace-nowrap">
          {teamMembers.map((member) => (
            <CarouselItem
              key={member.id}
              className="sm:basis-1/3 flex justify-center px-4"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="w-[280px] bg-zinc-900 text-white border-zinc-800 hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="items-center">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full border border-gray-500"
                      />
                      <CardTitle className="mt-2 text-xl">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-gray-400">
                      Hover to view bio & skills
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-64 bg-white text-black border">
                  <p className="text-sm mb-2">{member.bio}</p>
                  <p className="text-xs font-medium">
                    Skills:{" "}
                    <span className="font-normal">
                      {member.skills.join(", ")}
                    </span>
                  </p>
                </HoverCardContent>
              </HoverCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
