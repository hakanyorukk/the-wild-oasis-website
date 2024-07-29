"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initalState = { from: null, to: null };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);
  const resetRange = () => setRange(initalState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { ReservationProvider, useReservation };

//IT is only gonna work for client components
//If you want to share state between client and server then you have to use URL.
