import FeaturedDestination from "@/components/destinationpage/FeaturedDestination"
import HolidayCollections from "@/components/destinationpage/HolidayCollections"
import PopularDestinations from "@/components/destinationpage/PopularDestinations"

function Destinations() {
  return (
    <>
       {/* --PopularDestinations- start */}
       <PopularDestinations/>
       {/* --PopularDestinations- end */}

       {/* HolidayCollections=- start */}
       <HolidayCollections/>
       {/* HolidayCollections=- end */}

       {/* --FeaturedDestination--start */}
       <FeaturedDestination/>
       {/* --FeaturedDestination--end */}
    </>
  )
}

export default Destinations
