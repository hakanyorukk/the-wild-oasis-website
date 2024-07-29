import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
//if you use searchParams is not valid anymore
//export const revalidate = 15;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  //searchParams on;y avaliable in page.js not in server components
  console.log(searchParams);

  const filter = searchParams?.capacity ?? "all";
  //We do not need useEffect, state, any separete data fetching library
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <ReservationReminder />
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}

//Suspense needs to be outside the component that does the asynchronous work.

//For better UX keep data fetching as close the components, or even inside the compoenent
