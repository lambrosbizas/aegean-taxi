"use client";
import { useParams } from "next/navigation";

import Reviews from "@/components/reviews/reviews";
import TaxiAthensReviews from "@/components/reviews/taxiAthens";
import TaxiMykonosReviews from "@/components/reviews/taxiMykonos";
import TaxiSantoriniReviews from "@/components/reviews/taxiSantorini";
import TaxiCorfuReviews from "@/components/reviews/taxiCorfu";
import TaxiRhodesReviews from "@/components/reviews/taxiRhodes";

export default function TaxiReviews() {
  const params: any = useParams();
  let reviewsComponent = <Reviews location={params.location} />;

  if (params.location) {
    const city = (
      params.location.charAt(0).toUpperCase() + params.location.slice(1)
    ).replace("-taxi-app", "");
    switch (city) {
      case "Athens":
        reviewsComponent = <TaxiAthensReviews />;
        break;
      case "Mykonos":
        reviewsComponent = <TaxiMykonosReviews />;
        break;
      case "Santorini":
        reviewsComponent = <TaxiSantoriniReviews />;
        break;
      case "Corfu":
        reviewsComponent = <TaxiCorfuReviews />;
        break;
      case "Rhodes":
        reviewsComponent = <TaxiRhodesReviews />;
        break;
      default:
        reviewsComponent = <Reviews location={params.location} />;
        break;
    }
  }

  return reviewsComponent;
}
