import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is it safe for students to travel with TripTamizh?",
      answer: "Absolutely! Safety is our top priority. We have a 100% safety record since 1989. All our vehicles are well-maintained with GPS tracking, our drivers are experienced and verified, and we provide 24/7 support during trips. We also have comprehensive insurance coverage for all our services."
    },
    {
      question: "Can we customize our trip itinerary?",
      answer: "Yes! We specialize in customized trips based on your college requirements, budget, and preferences. Whether you want to focus on specific companies for industrial visits, add adventure activities, or visit particular destinations, we can tailor the perfect package for your group."
    },
    {
      question: "What are the payment options available?",
      answer: "We offer flexible payment options including advance booking with partial payment, college PO (Purchase Order), online transfers, UPI payments, and installment plans for large groups. We also provide transparent pricing with no hidden costs."
    },
    {
      question: "What's included in the Industrial Visit packages?",
      answer: "Our IV packages include transportation (AC vehicles), entry fees to companies/factories, professional tour guide, group photographs, refreshments during travel, educational certificates, and 24/7 emergency support. Accommodation and meals can be added based on trip duration."
    },
    {
      question: "Do you provide vehicles with drivers for self-drive rentals?",
      answer: "While our focus is on self-drive rentals for the freedom experience, we do provide experienced drivers on request for an additional ₹500/day. All our vehicles come with GPS navigation and 24/7 roadside assistance."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking at least 2-3 weeks in advance for IV tours to ensure company visit confirmations. For self-drive rentals, 1 week advance booking is usually sufficient. However, we do accommodate last-minute bookings based on availability."
    },
    {
      question: "What happens in case of vehicle breakdown?",
      answer: "We provide 24/7 roadside assistance and have backup vehicles ready. In case of any breakdown, we ensure immediate replacement or repair service. Our support team is always reachable via phone and WhatsApp for immediate assistance."
    },
    {
      question: "Are there any age restrictions for self-drive rentals?",
      answer: "The primary driver must be at least 21 years old with a valid driving license (minimum 2 years experience). We also require a security deposit and proper documentation. For student groups, we can provide drivers if needed."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions from our students.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-warm transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Still have questions CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6 text-white/90">
                Our friendly team is here to help! Get in touch and we'll answer all your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Contact Us
                </button>
                <button className="bg-white/20 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;