import DestinationBanner from "@/components/destinationpage/DestinationBanner"
import FeaturedDestination from "@/components/destinationpage/FeaturedDestination"
import HolidayCollections from "@/components/destinationpage/HolidayCollections"
import PopularDestinations from "@/components/destinationpage/PopularDestinations"
import TopExperiences from "@/components/destinationpage/TopExperiences"
import TrendingDestinations from "@/components/destinationpage/TrendingDestinations"
import WhyChooseUs from "@/components/destinationpage/WhyChooseUs"

function Destinations() {
  return (
    <>
      {/* --DestinationBanner--start */}
      <DestinationBanner/>
      {/* --DestinationBanner--end */}
      
       {/* --PopularDestinations- start */}
       <PopularDestinations/>
       {/* --PopularDestinations- end */}

       {/* HolidayCollections=- start */}
       <HolidayCollections/>
       {/* HolidayCollections=- end */}

       {/* --FeaturedDestination--start */}
       <FeaturedDestination/>
       {/* --FeaturedDestination--end */}

       {/* --TrendingDestinations--start */}
       <TrendingDestinations/>
       {/* --TrendingDestinations--end */}

       {/* --TopExperiences--start */}
       <TopExperiences/>
       {/* --TopExperiences--end */}

       {/* --WhyChooseUs--start */}
       <WhyChooseUs/>
       {/* --WhyChooseUs--end */}
    </>
  )
}

export default Destinations
