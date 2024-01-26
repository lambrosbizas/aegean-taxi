"use client";
import { useParams } from "next/navigation";

import AirportLandingReviews from "@/components/reviews/airportLanding";
import AirportAthensReviews from "@/components/reviews/airportAthens";
import AirportMykonosReviews from "@/components/reviews/airportMykonos";
import AirportSantoriniReviews from "@/components/reviews/airportSantorini";

export default function AirportReviews() {
  const params: any = useParams();
  let reviewsComponent = <AirportLandingReviews />;

  if (params.location) {
    const city =
      params.location.charAt(0).toUpperCase() + params.location.slice(1);
    switch (city) {
      case "Athens":
        reviewsComponent = <AirportAthensReviews />;
        break;
      case "Mykonos":
        reviewsComponent = <AirportMykonosReviews />;
        break;
      case "Santorini":
        reviewsComponent = <AirportSantoriniReviews />;
        break;
      default:
        reviewsComponent = <AirportLandingReviews location={params.location} />;
        break;
    }
  }

  return reviewsComponent;
}
