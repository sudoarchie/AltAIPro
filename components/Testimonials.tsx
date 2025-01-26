import { Star } from "lucide-react";
import Image from "next/image";
import img1 from "@/public/profile1.svg";
import img2 from "@/public/pic-profile2.svg";
import img3 from "@/public/profile1.svg";



const testimonials = [
  {
    name: "Sarah Johnson",
    role: "SEO Manager",
    company: "TechCorp",
    image: img1,
    content: "AISEOPro has revolutionized our alt text generation process. The accuracy and efficiency are remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Content Strategist",
    company: "Digital Growth",
    image: img2,
    content: "The hierarchical keyword feature has helped us structure our content more effectively. A game-changer for our SEO strategy.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "StartupHub",
    image: img3,
    content: "The review analysis tool provides incredible insights. It's transformed how we handle customer feedback.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-blue-100/40 bg-[size:20px_20px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Discover how AISEOPro is helping businesses improve their SEO and content strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 
                shadow-lg hover:shadow-2xl transition-all duration-500 
                border border-blue-100 hover:border-blue-200
                transform hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-blue-500 text-blue-500"
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-blue-800 mb-6 relative">
                <span className="absolute -top-4 -left-2 text-5xl text-blue-200">"</span>
                <p className="relative z-10 text-blue-600/90 leading-relaxed">
                  {testimonial.content}
                </p>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-gradient-to-br 
                from-blue-100/50 to-transparent rounded-full blur-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Social proof numbers */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              500+
            </h3>
            <p className="text-blue-600 mt-2">Happy Customers</p>
          </div>
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              1M+
            </h3>
            <p className="text-blue-600 mt-2">Alt Texts Generated</p>
          </div>
          <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              98%
            </h3>
            <p className="text-blue-600 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

