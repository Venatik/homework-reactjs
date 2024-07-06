import { useTheme } from "../../context/theme.context";

const UserDetails = () => {
  const user = {
    fullName: "Stefan Trajkovski",
    age: 35,
    profession: "Unemployed",
    from: "Kumanovo",
  };

  const { theme } = useTheme() as { theme: string };

  const style = {
    backgroundColor: theme === "LIGHT" ? "lightgray" : "black",
    color: theme === "LIGHT" ? "blue" : "white",
  };

  return (
    <div style={style}>
      <p>Full Name: {user.fullName}</p>
      <p>Age: {user.age}</p>
      <p>Profession: {user.profession}</p>
      <p>From: {user.from}</p>
    </div>
  );
};

export default UserDetails;
