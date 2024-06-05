const Trips = () => {
  const trips = ["Iceland", "Japan", "France", "Vietnam"];

  return (
    <div>
      <h3>My trips</h3>
      <ul>
        {trips.map(trip => {
          return <li key={trip}>{trip}</li>;
        })}
      </ul>
    </div>
  );
};

export default Trips;
