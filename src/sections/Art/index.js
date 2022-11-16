import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=10")
      .then((res) => res.json())
      .then((dataArt) => setArts(dataArt.data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {/* props: arts */}
        <ArtList arts={arts} />
      </div>
    </section>
  );
}

export default ArtsSection;
