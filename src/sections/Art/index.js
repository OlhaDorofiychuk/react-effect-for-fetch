import { useEffect, useState } from "react";

function ArtsSection() {
  const [arts, setArts] = useState({});

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
                  <img src="https://www.artic.edu/iiif/2/4e074d70-4424-331b-ec89-0776a45d6825/full/843,/0/default.jpg" />
                </div>
                <h3>{art.title}</h3>
                <p>Artist: Édouard Manet</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  <li>Century of Progress</li>
                  <li>men</li>
                  <li>portraits</li>
                  <li>world's fairs</li>
                  <li>Chicago World's Fairs</li>
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
