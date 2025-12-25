import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const heroImage =
  'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1600'
const aboutImageTop =
  'https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=1200'
const aboutImageBottom =
  'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=1200'
// New images for Team section
const teamImageTop =
  'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800' // Couple holding hands
const teamImageBottom = aboutImageBottom // Reusing for table setting

// Service images (Portfolio)
const serviceImage1 =
  'https://images.pexels.com/photos/3292644/pexels-photo-3292644.jpeg?auto=compress&cs=tinysrgb&w=800'
const serviceImage2 =
  'https://images.pexels.com/photos/4553366/pexels-photo-4553366.jpeg?auto=compress&cs=tinysrgb&w=800'
const serviceImage3 =
  'https://images.pexels.com/photos/5699990/pexels-photo-5699990.jpeg?auto=compress&cs=tinysrgb&w=800'

// Testimonial Images
const testimonialImage1 =
  'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
const testimonialImage2 =
  'https://images.pexels.com/photos/3551221/pexels-photo-3551221.jpeg?auto=compress&cs=tinysrgb&w=800'
const testimonialImage3 =
  'https://images.pexels.com/photos/5216924/pexels-photo-5216924.jpeg?auto=compress&cs=tinysrgb&w=800'

// Bottom CTA Banner
const bottomCtaImage =
  'https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1600' // Bridesmaids/Group

type Testimonial = {
  name: string
  text: string
}

type ServiceItem = {
  title: string
  subtitle: string
}

export function HomePage() {
  const { t } = useTranslation()
  const location = useLocation()

  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[]
  const services = t('services.items', { returnObjects: true }) as ServiceItem[]

  const package1Before = t('packages.package1.before.items', { returnObjects: true }) as string[]
  const package1During = t('packages.package1.during.items', { returnObjects: true }) as string[]
  const package1After = t('packages.package1.after.items', { returnObjects: true }) as string[]
  const package2Scope = t('packages.package2.scope.items', { returnObjects: true }) as string[]
  const package2For = t('packages.package2.for.items', { returnObjects: true }) as string[]

  const serviceImages = [serviceImage1, serviceImage2, serviceImage3]
  const testimonialImages = [testimonialImage1, testimonialImage2, testimonialImage3]

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash)
        if (section) {
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 80
          const rect = section.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
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
      {/* Hero - Keeping Original as requested */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative flex h-full items-center justify-center bg-gradient-to-b from-black/55 via-black/40 to-black/45 text-center text-[#fffaf2]">
          <div className="px-4">
            <h1 className="font-whistling mb-5 text-3xl md:text-[2.4rem]">{t('hero.title')}</h1>
            <p className="mx-auto mb-2 max-w-5xl text-sm md:text-base">{t('hero.subtitle')}</p>
            <button className="rounded-full bg-[#df8a2f] px-8 py-2.5 text-sm font-medium text-white shadow-[0_12px_25px_rgba(0,0,0,0.25)] hover:bg-[#c8731e]">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Updated Image 0 Layout */}
      <section className="bg-[#fffdf7] px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* Images Left */}
          <div className="relative">
            <div className="relative z-10 w-[85%] overflow-hidden rounded-[20px] shadow-2xl">
              <img src={aboutImageTop} alt="Wedding cake" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-12 -right-4 z-0 w-[65%] overflow-hidden rounded-[20px] shadow-xl md:block hidden">
              <img src={aboutImageBottom} alt="Wedding decor" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Text Right */}
          <div className="pl-4">
            <h2 className="font-whistling mb-8 text-3xl leading-snug text-[#2f2a25] md:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mb-4 text-sm leading-7 text-neutral-600 md:text-[0.95rem]">
              {t('about.body1')}
            </p>
            <p className="mb-8 text-sm leading-7 text-neutral-600 md:text-[0.95rem]">
              {t('about.body2')}
            </p>
            <button className="rounded-r-lg rounded-tl-lg bg-[#df8a2f] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c8731e]">
              {t('about.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Updated Image 1 Top */}
      <section className="bg-[#fff8e6] px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-3">
          {/* Left Image */}
          <div className="h-[400px] overflow-hidden rounded-[30px] shadow-lg md:h-[500px]">
            <img src={teamImageTop} alt="Couple holding hands" className="h-full w-full object-cover" />
          </div>

          {/* Center Text */}
          <div className="text-center">
            <h2 className="font-whistling mb-2 text-3xl text-[#2f2a25] md:text-4xl">
              {t('team.title')}
            </h2>
            <p className="font-whistling mb-6 text-xl text-neutral-600">
              {t('team.subtitle')}
            </p>
            <div className="mb-4 flex justify-center text-2xl">💌</div>
            <p className="mb-8 px-4 text-sm leading-relaxed text-neutral-600">
              {t('team.body')}
            </p>
            <button className="rounded bg-[#df8a2f] px-8 py-3 text-sm font-semibold text-white hover:bg-[#c8731e]">
              {t('team.cta')}
            </button>
          </div>

          {/* Right Image */}
          <div className="h-[300px] overflow-hidden rounded-[30px] shadow-lg md:h-[400px] mt-12 md:mt-0">
            <img src={teamImageBottom} alt="Table setting" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section - Updated Image 1 Bottom */}
      <section className="bg-[#fffdf7] px-5 py-20 md:px-10" id="services">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-whistling mb-16 text-center text-3xl text-[#2f2a25] md:text-5xl">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative h-[450px] overflow-hidden rounded-xl border-[6px] border-[#8cb0f8] shadow-lg md:h-[550px]"
                style={{ borderColor: '#2563eb' }}
              >
                {/* Note: Border color in provided image is a vibrant blue/cyan on standard CSS border? Or maybe padding? 
                      The image has a blue border around the cards. I'll use a blue-500 equivalent.
                   */}
                <img
                  src={serviceImages[index]}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Box */}
                <div className="absolute bottom-8 left-1/2 w-4/5 -translate-x-1/2 transform bg-white/30 p-4 text-center backdrop-blur-md transition-all hover:bg-white/50">
                  <h3 className="font-whistling text-2xl text-[#2f2a25] md:text-3xl">{item.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-[#2f2a25]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Love Stories) - Image 2 */}
      <section className="bg-[#fffdf7] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-whistling mb-4 text-4xl text-[#2f2a25] md:text-5xl">
              {t('testimonials.title')}
            </h2>
            <p className="text-sm text-neutral-600 md:text-base">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Image */}
                <div className="mb-6 h-64 w-full overflow-hidden rounded-lg shadow-md">
                  <img
                    src={testimonialImages[index]}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Name */}
                <h3 className="font-whistling mb-3 text-2xl text-[#2f2a25]">
                  {item.name}
                </h3>
                {/* Quote */}
                <p className="text-sm italic leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Image 3 */}
      <section className="bg-[#fffdf7] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-whistling text-4xl text-[#2f2a25] md:text-5xl">
              {t('packages.title')}
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Package 1 - Gold */}
            <div className="flex flex-col rounded-lg bg-[#df8a2f] p-8 text-white shadow-xl">
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide">{t('packages.package1.title')}</h3>
              <p className="mb-8 text-sm opacity-90">{t('packages.package1.desc')}</p>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 font-bold">{t('packages.package1.before.title')}</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    {package1Before.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">✔ {text}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-bold">{t('packages.package1.during.title')}</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    {package1During.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">✔ {text}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-bold">{t('packages.package1.after.title')}</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    {package1After.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">✔ {text}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full rounded border border-white bg-transparent py-3 font-medium uppercase text-white hover:bg-white/10">
                  {t('packages.cta')}
                </button>
              </div>
            </div>

            {/* Package 2 - Beige */}
            <div className="flex flex-col rounded-lg bg-[#fff8e6] p-8 text-[#2f2a25] shadow-xl border border-neutral-100">
              <h3 className="mb-2 text-xl font-bold uppercase tracking-wide">{t('packages.package2.title')}</h3>
              <p className="mb-8 text-sm text-neutral-600">{t('packages.package2.desc')}</p>

              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 font-bold">{t('packages.package2.scope.title')}</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    {package2Scope.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">✔ {text}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-bold">{t('packages.package2.for.title')}</h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    {package2For.map((text, i) => (
                      <li key={i} className="flex items-start gap-2">✔ {text}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <button className="w-full rounded border border-[#2f2a25] bg-transparent py-3 font-medium uppercase text-[#2f2a25] hover:bg-[#2f2a25] hover:text-white transition-colors">
                  {t('packages.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner - Image 3/4 */}
      <section className="bg-[#fffdf7]">
        <div className="grid md:grid-cols-2">
          {/* Text Left */}
          <div className="flex flex-col justify-center bg-[#fff8e6] px-10 py-20 text-center md:text-left md:px-20">
            <h2 className="font-whistling mb-4 text-4xl text-[#2f2a25] md:text-5xl leading-tight">
              {t('bottomCta.title')}
            </h2>
            <p className="mb-8 text-neutral-600">
              {t('bottomCta.subtitle')}
            </p>
            <div>
              <button className="rounded bg-[#df8a2f] px-8 py-3 text-sm font-semibold text-white hover:bg-[#c8731e]">
                {t('bottomCta.button')}
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="h-[400px] md:h-auto">
            <img src={bottomCtaImage} alt="Celebration" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

    </>
  )
}
