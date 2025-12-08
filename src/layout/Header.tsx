import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../components/LangugeSwitch'

export function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const navLinks = t('nav.links', { returnObjects: true }) as string[]
  const isEnglish = i18n.language === "en";

  const toggle = () => {
    i18n.changeLanguage(isEnglish ? "vi" : "en");
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Get header height dynamically
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      
      // Calculate scroll position - use getBoundingClientRect for more accuracy
      const rect = section.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // Add extra offset to scroll closer to the title (reduce gap)
      const scrollPosition = rect.top + scrollTop - headerHeight + 100

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (label: string, index: number, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Map section names to IDs
    const sectionMap: { [key: number]: string } = {
      0: 'services', // Services
      // Add more sections here if needed
    }
    
    const sectionId = sectionMap[index]
    
    if (sectionId) {
      // If not on home page, navigate with hash
      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`)
      } else {
        // Already on home page, scroll to section
        scrollToSection(sectionId)
      }
    }
  }

  const paths = ['/', '/blog']

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-black/5 bg-transparent backdrop-blur">
      <div className="mx-auto flex  items-center justify-between px-10 py-3">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-display text-xl tracking-wide text-white">
            {t('nav.brand')}
          </Link>
          <nav className="hidden items-center gap-8 text-[0.95rem] text-white md:flex">
            {navLinks.map((label, index) => {
              const isSectionLink = index === 0 // Services is a section link
              
              return (
                <NavLink
                  key={label}
                  to={paths[index] || '/'}
                  onClick={(e) => {
                    if (isSectionLink) {
                      handleNavClick(label, index, e)
                    }
                  }}
                  className={({ isActive }) =>
                    [
                      'relative pb-1 transition-colors cursor-pointer',
                      isActive ? 'text-ellie-gold' : 'hover:text-ellie-gold',
                    ].join(' ')
                  }
                >
                  <span className="after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-ellie-gold after:transition-all after:duration-200 hover:after:w-full">
                    {label}
                  </span>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <Link
            to="/contact"
            className="flex h-9 w-[140px] flex-shrink-0 items-center justify-center rounded-full border border-white bg-transparent text-sm font-medium text-white backdrop-blur hover:text-ellie-gold hover:border-ellie-gold"
          >
            {t('about.cta')}
          </Link>
        </div>
      </div>
    </header>
  )
}
