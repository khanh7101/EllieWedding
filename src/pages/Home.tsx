import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const heroImage =
  'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1600'
const aboutImageTop =
  'https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=1200'
const aboutImageBottom =
  'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=1200'
const serviceImage =
  'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1200'
const portfolioImage1 =
  'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
const portfolioImage2 =
  'https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=800'
const portfolioImage3 =
  'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800'
const testimonial1Image =
  'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200'
const testimonial2Image =
  'https://images.pexels.com/photos/3476249/pexels-photo-3476249.jpeg?auto=compress&cs=tinysrgb&w=1200'
const testimonial3Image =
  'https://images.pexels.com/photos/258745/pexels-photo-258745.jpeg?auto=compress&cs=tinysrgb&w=1200'
const payImage =
  'https://images.pexels.com/photos/702019/pexels-photo-702019.jpeg?auto=compress&cs=tinysrgb&w=1600'

type Testimonial = {
  name: string
  text: string
}

type PortfolioItem = {
  couple: string
  location: string
  theme: string
}

export function HomePage() {
  const { t } = useTranslation()
  const location = useLocation()
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[]
  const portfolioItems = t('services.portfolio', { returnObjects: true }) as PortfolioItem[]
  const package1Before = t('packages.package1.before.items', { returnObjects: true }) as string[]
  const package1During = t('packages.package1.during.items', { returnObjects: true }) as string[]
  const package1After = t('packages.package1.after.items', { returnObjects: true }) as string[]
  const package2Scope = t('packages.package2.scope.items', { returnObjects: true }) as string[]
  const package2For = t('packages.package2.for.items', { returnObjects: true }) as string[]
  
  const portfolioImages = [portfolioImage1, portfolioImage2, portfolioImage3]

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      // Delay to ensure page is fully rendered
      setTimeout(() => {
        const section = document.getElementById(hash)
        if (section) {
          // Get header height dynamically
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 80
          
          // Calculate scroll position - use getBoundingClientRect for more accuracy
          const rect = section.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          // Add extra offset to scroll closer to the title (reduce gap)
          const scrollPosition: number = rect.top + scrollTop - headerHeight + 60

          window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
          })
        }
      }, 500)
    }
  }, [location])

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative flex h-full items-center justify-center bg-gradient-to-b from-black/55 via-black/40 to-black/45 text-center text-[#fffaf2]">
          <div className="px-4">
            <h1 className="font-whistling mb-5 text-3xl md:text-[2.4rem]">{t('hero.title')}</h1>
            <p className="mx-auto mb-2 max-w-5xl text-sm md:text-base">{t('hero.subtitle1')}</p>
            <p className="mx-auto mb-5 max-w-5xl text-sm md:text-base">{t('hero.subtitle2')}</p>
            <button className="rounded-full bg-[#df8a2f] px-8 py-2.5 text-sm font-medium text-white shadow-[0_12px_25px_rgba(0,0,0,0.25)] hover:bg-[#c8731e]">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="px-5 pt-16 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr,1fr]">
          <div className="relative">
            <div className="relative w-4/5 overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,0.13)]">
              <img src={aboutImageTop} alt="Wedding cake and sweets" className="w-full" />
            </div>
            <div className="absolute right-0 bottom-[-8%] w-[78%] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,0.13)] md:block hidden">
              <img src={aboutImageBottom} alt="Wedding table decor" className="w-full" />
            </div>
            <div className="mt-6 overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(0,0,0,0.13)] md:hidden">
              <img src={aboutImageBottom} alt="Wedding table decor" className="w-full" />
            </div>
          </div>
          <div>
            <h2 className="section-title mb-4 text-xl md:text-[1.5rem]">{t('about.title')}</h2>
            <p className="mb-6 text-sm leading-7 md:text-[0.95rem]">{t('about.body')}</p>
            <button className="rounded-full border border-[#df8a2f] bg-[#df8a2f] px-7 py-2 text-sm font-medium text-white hover:bg-[#c8731e]">
              {t('about.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 pt-20 md:px-10" id="services">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mb-12 text-center text-xl md:text-[1.6rem]">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-lg shadow-[0_12px_28px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="h-[500px] w-full overflow-hidden rounded-lg md:h-[550px]">
                  <img
                    src={portfolioImages[index]}
                    alt={`${item.couple} wedding`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 object-center"
                  />
                </div>
                {/* Text Overlay Card - Separate element overlaying the image */}
                <div className="absolute bottom-[-15%] left-0 right-0 z-10 p-6">
                  <div className="rounded-lg bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                    <p className="mb-2 text-xs font-medium tracking-[0.05em] uppercase text-neutral-600 md:text-sm">
                      {item.couple} | {item.location}
                    </p>
                    <h3 className="font-whistling mb-4 text-2xl leading-tight text-neutral-900 md:text-[2.2rem]">
                      {item.theme}
                    </h3>
                    <button className="flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-[#df8a2f]">
                      {t('services.viewMore')}
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 pt-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="section-title mb-3 text-3xl md:text-4xl">
              {t('testimonials.title')}
            </h2>
            <p className="text-sm text-neutral-600 md:text-base">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="rounded-lg bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              >
                {/* Stars */}
                <div className="mb-5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-[#fbbf24]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="mb-6 text-sm italic leading-relaxed text-neutral-800 md:text-[0.95rem]">
                  "{testimonial.text}"
                </p>
                {/* Couple Name */}
                <h3 className="font-bold text-[#ec4899] md:text-base">
                  {testimonial.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="px-5 pt-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="section-title mb-3 text-3xl md:text-4xl">
              {t('packages.title')}
            </h2>
            <p className="text-sm text-neutral-600 md:text-base">
              {t('packages.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Package 1 */}
            <div className="relative flex flex-col rounded-lg border-2 border-[#fce7f3] bg-[#fdf2f8] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              {/* Recommended Tag */}
              <div className="absolute left-1/2 -top-3 -translate-x-1/2 rounded-full bg-[#ec4899] px-5 py-1.5 text-sm font-semibold text-white">
                {t('packages.package1.recommended')}
              </div>
              <h3 className="section-title mb-2 text-2xl">{t('packages.package1.title')}</h3>
              <p className="mb-6 text-sm text-neutral-600">{t('packages.package1.desc')}</p>
              
              {/* Before Wedding */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-neutral-800">
                  {t('packages.package1.before.title')}
                </h4>
                <ul className="space-y-2">
                  {package1Before.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#ec4899]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* During Wedding */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-neutral-800">
                  {t('packages.package1.during.title')}
                </h4>
                <ul className="space-y-2">
                  {package1During.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#ec4899]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Wedding */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-neutral-800">
                  {t('packages.package1.after.title')}
                </h4>
                <ul className="space-y-2">
                  {package1After.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#ec4899]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Link
                  to="/contact"
                  className="block w-full rounded-lg bg-[#ec4899] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#db2777]"
                >
                  {t('packages.cta')}
                </Link>
              </div>
            </div>

            {/* Package 2 */}
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              <h3 className="section-title mb-2 text-2xl">{t('packages.package2.title')}</h3>
              <p className="mb-6 text-sm text-neutral-600">{t('packages.package2.desc')}</p>
              
              {/* Scope of Work */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-neutral-800">
                  {t('packages.package2.scope.title')}
                </h4>
                <ul className="space-y-2">
                  {package2Scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#ec4899]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Couples */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-neutral-800">
                  {t('packages.package2.for.title')}
                </h4>
                <ul className="space-y-2">
                  {package2For.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#ec4899]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Link
                  to="/contact"
                  className="block w-full rounded-lg bg-[#ec4899] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#db2777]"
                >
                  {t('packages.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment banner */}
      {/* <section className="px-0 pt-20 md:px-0">
        <div className="grid grid-cols-1 bg-[#d89734] md:grid-cols-[1.2fr,1.3fr]">
          <div className="px-6 py-10 text-[#fffdf7] md:px-12">
            <h2 className="section-title mb-3 text-[1.4rem]">{t('pay.title')}</h2>
            <p className="mb-5 text-sm leading-7 md:text-[0.95rem]">{t('pay.body')}</p>
            <button className="text-sm underline underline-offset-4">
              {t('pay.cta')}
            </button>
          </div>
          <div className="h-full w-full">
            <img
              src={payImage}
              alt="Wedding couple by the lake"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section> */}
    </>
  )
}


