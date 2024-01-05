"use client";
import { useParams } from "next/navigation";

import AthensFares from "./athensFares";
import MykonosFares from "./mykonosFares";
import SantoriniFares from "./santoriniFares";
import CorfuFares from "./corfuFares";
import RhodesFares from "./rhodesFares";
import Fares from "./Fares";

export default function TaxiFares() {
  const params: any = useParams();
  const location = params.location.toLowerCase();
  const locations = ["milos-taxi-app"];

  return (
    <>
      {location === "athens-taxi-app" && <AthensFares />}
      {location === "mykonos-taxi-app" && <MykonosFares />}
      {location === "santorini-taxi-app" && <SantoriniFares />}
      {location === "corfu-taxi-app" && <CorfuFares />}
      {location === "rhodes-taxi-app" && <RhodesFares />}
      {locations.includes(location) && <Fares location={location} />}
    </>
  );
}
