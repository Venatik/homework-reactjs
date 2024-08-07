import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Trips } from "./components/Trips/Trips";
import { TripDetails } from "./components/TripDetails/TripDetails";
import { Contact } from "./components/Contact/Contact";
import { useState } from "react";
import { Trip, trips } from "./trip.data";
import AddTrip from "./components/AddTrip/AddTrip";
import { ThemeProvider } from "./context/theme.context";

function App() {
  const [plannedTrips, setPlannedTrips] = useState<Trip[]>(trips);

  const handleRemoveTrip = (id: number) => {
    const filteredTrips = plannedTrips.filter(trip => trip.id !== id);

    setPlannedTrips(filteredTrips);
  };

  const handleAddTrip = (newTrip: Trip) => {
    setPlannedTrips([...plannedTrips, newTrip]);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="trips"
            element={
              <Trips
                plannedTrips={plannedTrips}
                handleRemoveTrip={handleRemoveTrip}
              />
            }
          />

          <Route
            path="trips/:id"
            element={<TripDetails trips={plannedTrips} />}
          />

          <Route path="contact" element={<Contact />} />

          <Route
            path="add-trip"
            element={<AddTrip addTrip={handleAddTrip} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// //TODO - Type '(newTrip: Trip) => void' is not assignable to type '(trip: Trip) => void'.
//   Types of parameters 'newTrip' and 'trip' are incompatible.
//   Type 'Trip' is not assignable to type 'import("e:/SEDC/repos/homework-reactjs/Class03/trip-planner/src/trip.data").Trip'.
//     Types of property 'status' are incompatible.
//       Type 'string' is not assignable to type 'TripStatus'.
