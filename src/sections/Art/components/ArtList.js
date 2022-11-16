import ArtListItem from "./ArtListItem";

function ArtList(props) {
  // props: arts

  return (
    <ul className="art-list">
      {props.arts.map((art) => {
        return (
          // Props: art
          <ArtListItem art={art} />
        );
      })}
    </ul>
  );
}

export default ArtList;
