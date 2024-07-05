import Movies from "./Movies";

interface InformationProps {
  fullName: string;
  from: string;
  favoriteMovies: string[];
}

const AboutMe = (props: InformationProps) => {
  const { fullName, from, favoriteMovies } = props;

  return (
    <div>
      <p>
        {fullName} from {from}
      </p>
      <Movies movies={favoriteMovies} />
    </div>
  );
};

export default AboutMe;
