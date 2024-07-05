import { useState, FormEvent } from "react";
import { TripStatus } from "../../trip.data";

interface Trip {
  id: number;
  title: string;
  destination: string;
  budget: number;
  image: string;
  status: TripStatus;
}

interface AddTripProps {
  addTrip: (trip: Trip) => void;
}

function AddTrip({ addTrip }: AddTripProps) {
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [image, setImage] = useState("");

  const clearInputs = () => {
    setTitle("");
    setDestination("");
    setBudget("");
    setImage("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTrip = {
      id: Date.now(),
      title,
      destination,
      budget: Number(budget),
      image,
      status: TripStatus.PLANNING,
    };
    addTrip(newTrip);
    clearInputs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={destination}
        onChange={e => setDestination(e.target.value)}
        placeholder="Destination"
        required
      />
      <input
        type="number"
        value={budget}
        onChange={e => setBudget(e.target.value)}
        placeholder="Budget"
        required
      />
      <input
        type="text"
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button type="submit">Create Trip</button>
    </form>
  );
}

export default AddTrip;
