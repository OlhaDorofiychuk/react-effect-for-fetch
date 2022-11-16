import { useEffect, useState } from "react";

function ArtsSection() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=10")
      .then((res) => res.json())
      .then((dataArt) => {
        setArts(dataArt.data);
        console.log(arts);
      });
  }, []);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {arts.map((art) => {
            return (
              <li key={art.id}>
                <div className="frame">
                  <img
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    alt={art.title}
                  />
                </div>
                <h3>{art.title}</h3>
                <p>Artist: {art.artist_title}</p>
                <h4>Artistic Subjects: {art.subject_titles}</h4>
                <ul>
                  <li>Century of Progress</li>
                  <li>men</li>
                  <li>portraits</li>
                  <li>{art.term_titles[0]}</li>
                  <li>{art.term_titles[1]}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
