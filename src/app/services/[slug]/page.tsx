import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// The SEO Database: Aap yahan jitne chahe utne pages add kar sakte hain
const servicePages: Record<string, any> = {
  "mern-stack-development": {
    title: "Expert MERN Stack Development Services",
    description: "Build blazing fast, scalable web applications with our premium MERN Stack development services in India.",
    heading: "MERN Stack Development",
    subheading: "Full-Stack Excellence for Modern Startups",
    benefits: ["Single Language Architecture (JS/TS)", "High-Performance React Frontend", "Scalable Node.js Backend", "Flexible MongoDB Database"],
  },
  "nextjs-development-company": {
    title: "Next.js Development Company | Zero Lag Apps",
    description: "Hire the top Next.js development agency to build SEO-optimized, ultra-fast enterprise web applications.",
    heading: "Next.js Development Agency",
    subheading: "The Future of React Engineering",
    benefits: ["Server-Side Rendering (SSR) for SEO", "Blazing Fast Page Loads", "Edge Computing Ready", "Perfect for Enterprise Scale"],
  },
  "web-development-india": {
    title: "Premium Web Development Company in India",
    description: "Partner with India's top web development agency for high-conversion, custom digital solutions.",
    heading: "World-Class Web Development in India",
    subheading: "Outsource Without Compromising Quality",
    benefits: ["Silicon Valley Level Quality", "Cost-Effective Packages", "Agile Development Process", "Dedicated Support Team"],
  }
};

// Dynamic SEO Metadata Generation (Google loves this)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicePages[params.slug];
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | SyncroCode`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

// The Page UI
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicePages[params.slug];

  // Agar user galat URL type kare, toh 404 page dikhao
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 text-white">
      {/* Dynamic Hero Section */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="text-sm font-bold tracking-wide text-blue-400 uppercase">
              Specialized Service
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-xl">
            {service.heading}
          </h1>
          <p className="max-w-3xl text-xl text-gray-400 font-medium">
            {service.subheading}. {service.description}
          </p>
        </div>

        {/* Dynamic Content & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl">
            <h3 className="mb-8 text-3xl font-bold text-white">Why choose our <span className="text-blue-500">Architecture?</span></h3>
            <ul className="flex flex-col gap-6">
              {service.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-center gap-4 text-lg font-medium text-gray-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                    <CheckCircle2 size={24} />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Targeted CTA Box */}
          <div className="flex flex-col justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-900 p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <h3 className="mb-4 text-3xl font-black text-white">Ready to dominate your niche?</h3>
            <p className="mb-10 text-lg text-blue-100">
              Let's build a solution that doesn't just look good, but drives real business metrics.
            </p>
            <Link 
              href="/#pricing" 
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Get a Quote 
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}