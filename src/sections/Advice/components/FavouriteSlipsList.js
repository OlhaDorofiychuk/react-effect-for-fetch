function FavouriteSlipsList(props) {
  // props: favoriteAdvices
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {props.favoriteAdvices.map((advice) => {
          // 179
          return <li key={advice.id}>{advice.advice}</li>;
        })}
      </ul>
    </section>
  );
}

export default FavouriteSlipsList;
