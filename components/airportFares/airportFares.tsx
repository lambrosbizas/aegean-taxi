"use client";
import { useParams } from "next/navigation";

import AthensFares from "./athensFares";
import MykonosFares from "./mykonosFares";
import SantoriniFares from "./santoriniFares";
import AirportsFares from "./Fares";

export default function AirportFares() {
  const params: any = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensFares />}
      {location === "mykonos" && <MykonosFares />}
      {location === "santorini" && <SantoriniFares />}
      {<AirportsFares location={location} />}
    </>
  );
}
