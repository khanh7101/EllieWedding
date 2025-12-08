import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const footerVenues = t('footer.venues', { returnObjects: true }) as string[]
  const footerServices = t('footer.services', { returnObjects: true }) as string[]
  const footerSupport = t('footer.support', { returnObjects: true }) as string[]

  return (
    <footer className="border-t border-black/5 px-5 pb-8 pt-10 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="grid gap-8 text-[0.86rem] md:grid-cols-3">
          <div className="flex flex-col gap-1">
            {footerVenues.map((item, idx) => (
              <span key={item} className={idx === 0 ? 'font-semibold mb-1' : ''}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {footerServices.map((item, idx) => (
              <span key={item} className={idx === 0 ? 'font-semibold mb-1' : ''}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {footerSupport.map((item, idx) => (
              <span key={item} className={idx === 0 ? 'font-semibold mb-1' : ''}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3 text-lg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  )
}


