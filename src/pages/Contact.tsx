import { useTranslation } from 'react-i18next'

export function ContactPage() {
  const { t } = useTranslation()
  const contactInfo = t('contact.info', { returnObjects: true }) as {
    phoneLabel: string
    phoneValue: string
    emailLabel: string
    emailValue: string
    consultLabel: string
    consultValue: string
  }
  const contactForm = t('contact.form', { returnObjects: true }) as {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    dateLabel: string
    datePlaceholder: string
    guestCountLabel: string
    guestCountPlaceholder: string
    venueTypeLabel: string
    venueTypePlaceholder: string
    budgetLabel: string
    budgetPlaceholder: string
    venueLabel: string
    venuePlaceholder: string
    visionLabel: string
    visionPlaceholder: string
    submit: string
  }

  return (
    <section className="px-5 pt-16 md:px-10">
      <div className="mx-auto grid max-w-5xl items-stretch gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display mb-4 text-2xl md:text-[2.1rem]">
            {t('contact.title')}
          </h2>
          <p className="mb-7 max-w-xl text-sm leading-8 md:text-[0.98rem]">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe4ec] to-[#f8d6e0] text-[1.4rem] text-[#c05a7b]">
                📞
              </div>
              <div>
                <div className="text-[0.98rem] font-semibold">
                  {contactInfo.phoneLabel}
                </div>
                <div className="text-[0.92rem] text-[#6b6460]">
                  {contactInfo.phoneValue}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe4ec] to-[#f8d6e0] text-[1.4rem] text-[#c05a7b]">
                ✉️
              </div>
              <div>
                <div className="text-[0.98rem] font-semibold">
                  {contactInfo.emailLabel}
                </div>
                <div className="text-[0.92rem] text-[#6b6460]">
                  {contactInfo.emailValue}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe4ec] to-[#f8d6e0] text-[1.4rem] text-[#c05a7b]">
                📅
              </div>
              <div>
                <div className="text-[0.98rem] font-semibold">
                  {contactInfo.consultLabel}
                </div>
                <div className="text-[0.92rem] text-[#6b6460]">
                  {contactInfo.consultValue}
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-white/90 bg-[#fffdfb] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] md:p-8"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.nameLabel}
              </span>
              <input
                type="text"
                placeholder={contactForm.namePlaceholder}
                name="name"
                autoComplete="name"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.emailLabel}
              </span>
              <input
                type="email"
                placeholder={contactForm.emailPlaceholder}
                name="email"
                autoComplete="email"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.phoneLabel}
              </span>
              <input
                type="tel"
                placeholder={contactForm.phonePlaceholder}
                name="phone"
                autoComplete="tel"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.dateLabel}
              </span>
              <input
                type="text"
                placeholder={contactForm.datePlaceholder}
                name="date"
                autoComplete="off"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.guestCountLabel}
              </span>
              <input
                type="number"
                placeholder={contactForm.guestCountPlaceholder}
                name="guestCount"
                autoComplete="off"
                min="1"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.venueTypeLabel}
              </span>
              <select
                name="venueType"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              >
                <option value="">{contactForm.venueTypePlaceholder}</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="both">Both</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.budgetLabel}
              </span>
              <input
                type="text"
                placeholder={contactForm.budgetPlaceholder}
                name="budget"
                autoComplete="off"
                className="w-full rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.venueLabel}
              </span>
              <textarea
                rows={3}
                placeholder={contactForm.venuePlaceholder}
                name="venue"
                className="min-h-[80px] w-full resize-y rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              <span className="mb-1.5 block text-sm font-semibold">
                {contactForm.visionLabel}
              </span>
              <textarea
                rows={4}
                placeholder={contactForm.visionPlaceholder}
                name="vision"
                className="min-h-[120px] w-full resize-y rounded-xl border border-[#efe5db] bg-[#fbf5ee] px-3 py-2.5 text-sm outline-none transition focus:border-[#f3a4c2] focus:bg-[#fffdfb] focus:shadow-[0_0_0_2px_rgba(243,164,194,0.3)]"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-gradient-to-r from-[#f29bbd] to-[#f4a9c7] px-4 py-2.5 text-sm font-medium text-white shadow-[0_18px_35px_rgba(230,128,165,0.45)] hover:brightness-[0.97]"
          >
            {contactForm.submit}
          </button>
        </form>
      </div>
    </section>
  )
}


