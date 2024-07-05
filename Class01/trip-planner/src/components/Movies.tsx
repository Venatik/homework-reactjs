interface MoviesProps {
  movies: string[];
}

const Movies = (props: MoviesProps) => {
  return (
    <ul>
      {props.movies.map(movie => {
        return <li key={movie}>{movie}</li>;
      })}
    </ul>
  );
};

export default Movies;
