import FeaturedHolidayHomes from "@/components/homepage/FeaturedHolidayHomes";
import Features from "@/components/homepage/Features";
import HeroBanner from "@/components/homepage/HeroBanner";
import HolidayCollections from "@/components/homepage/HolidayCollections";
import PopularDestinations from "@/components/homepage/PopularDestinations";
import PropertyOwnerCTA from "@/components/homepage/PropertyOwnerCTA";
import ReferralSection from "@/components/homepage/ReferralSection";
import Testimonials from "@/components/homepage/Testimonials";
import WhyBookDirect from "@/components/homepage/WhyBookDirect";

export default function HomePage() {
  return (
    <main>
     
      {/* --herobanner start */}
      <HeroBanner/>
      {/* --herobanner end */}

      {/* ---Features start---- */}
      <Features/>
      {/* ---Features end---- */}

      {/* -FeaturedHolidayHomes--start */}
      <FeaturedHolidayHomes/>
      {/* -FeaturedHolidayHomes--end */}

      {/* -----PopularDestinations--start */}
      <PopularDestinations/>
      {/* -----PopularDestinations--end */}

      {/* ---HolidayCollections--start */}
      <HolidayCollections/>
      {/* ---HolidayCollections--end */}

      {/* ---WhyBookDirect--start */}
      <WhyBookDirect/>
      {/* ---WhyBookDirect--end */}

      {/* ---ReferralSection--start */}
      <ReferralSection/>
      {/* ---ReferralSection--end */}

      {/* --PropertyOwnerCTA--start */}
      <PropertyOwnerCTA/>
      {/* --PropertyOwnerCTA--end */}

      {/* ----Testimonials start */}
      <Testimonials/>
      {/* ----Testimonials end */}
    </main>
  );
}
