import { AdvantagesBanner } from '@/components/advantages-banner'
import { FleetSection } from '@/components/fleet-section'
import { HeroSection } from '@/components/hero-section'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { PricingSection } from '@/components/pricing-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 sm:pb-0">
        <HeroSection />
        <PricingSection />
        <AdvantagesBanner />
        <ServicesSection />
        <FleetSection />
        <SiteFooter />
      </main>
      <MobileCallBar />
    </>
  )
}