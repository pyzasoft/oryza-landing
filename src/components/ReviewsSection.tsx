import { useTranslation } from 'react-i18next';

type Testimonial = {
  name: string;
  business: string;
  text: string;
  metric: string;
  image: string;
};

export default function ReviewsSection() {
    const { t } = useTranslation();
    const raw = t('reviews.testimonials', { returnObjects: true }) as Array<Omit<Testimonial, 'image'>>;
    const testimonials: Testimonial[] = raw.map((item, idx) => ({
      name: item.name,
      business: item.business,
      text: item.text,
      metric: item.metric,
      image: idx === 0 ? 'EU' : 'DP'
    }));
    return (
        <section className="relative overflow-hidden pb-20">
        {/* Background glows */}
        {/*   <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-1/4 w-[24rem] h-[24rem] rounded-full bg-green-500/10 blur-[100px] animate-blob" />
          <div className="absolute bottom-0 left-1/5 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-display tracking-tight">
              {t('reviews.headingLead')} <span className="text-green-600">{t('reviews.headingHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300">{t('reviews.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-full opacity-30"></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-300">{testimonial.business}</div>
                  </div>
                </div>
               {/*  <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-green-600" />
                </div> */}
                <p className="text-gray-300 mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg">
                  ⭐ {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}