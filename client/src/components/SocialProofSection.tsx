// Design: Social proof section with testimonials, client logos, and case studies
// Structure prepared for future content - no fictional data displayed
// Layout: Three subsections (testimonials, logos, case studies) with conditional rendering

import { motion } from "framer-motion";
import { Star, Users, TrendingUp } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  results: string[];
  image?: string;
}

interface SocialProofSectionProps {
  testimonials?: Testimonial[];
  clientLogos?: ClientLogo[];
  caseStudies?: CaseStudy[];
}

export default function SocialProofSection({
  testimonials = [],
  clientLogos = [],
  caseStudies = [],
}: SocialProofSectionProps) {
  // Only render if there's actual content
  if (!testimonials.length && !clientLogos.length && !caseStudies.length) {
    return null;
  }

  return (
    <section id="social-proof" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-yellow-400" />
                O que nossos clientes dizem
              </h2>
              <p className="text-gray-600">
                Conheça as histórias de sucesso de empresas que transformaram
                seus negócios com AgendaJa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Client Logos Section */}
        {clientLogos.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <Users className="w-8 h-8 text-green-500" />
                Empresas que confiam em AgendaJa
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 w-full h-20 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                Estudos de Caso
              </h2>
              <p className="text-gray-600">
                Veja como empresas reais cresceram com AgendaJa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {caseStudy.image && (
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <p className="text-sm text-green-600 font-semibold mb-2">
                      {caseStudy.company}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>

                    {caseStudy.results.length > 0 && (
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">
                          Resultados:
                        </p>
                        <ul className="space-y-1">
                          {caseStudy.results.map((result, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-700 flex items-start gap-2"
                            >
                              <span className="text-green-500 font-bold">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
