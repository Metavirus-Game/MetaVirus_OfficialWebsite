import "./gameFiSup.scss";
import { useState } from "react";
export default function GameFiSup() {
  const genre = [
    {
      img: process.env.PUBLIC_URL + "/img/genre_rpg.jpg",
      accessMode: "Competitions API",
      explan: "Integrate the match API and hold matches on LES",
    },
    {
      img: process.env.PUBLIC_URL + "/img/genre_metaverse.png",
      accessMode: "Sand Table Module API",
      explan:
        "Access account APl, index users attributes, and host UGC content contests.",
    },
    {
      img: process.env.PUBLIC_URL + "/img/genre_mining.png",
      accessMode: "Sand Table Module API",
      explan:
        "Connect to the Sandbox API and host short-term simulation contests for mining-style game worlds.",
    },
    {
      img: process.env.PUBLIC_URL + "/img/genre_x2e.png",
      accessMode: "NFT invoke",
      explan:
        "Integrate game modules (e.g. racing, running,RPG battles) and use NFTs as units, reward winners based on outcomes. Increase NFT value.",
    },
    {
      img: process.env.PUBLIC_URL + "/img/genre_nft.jpg",
      accessMode: "NFT invoke",
      explan:
        "Integrate game modules (e.g. racing, running, RPG battles) and use NFTs as units, reward winners based on outcomes. Increase NFT value.",
    },
  ];

  const [genreIndex, setGenreIndex] = useState(0);

  const switchGenre = (index) => {
    setGenreIndex(index);
  };

  return (
    <div className="gameFiSection">
      <div className="gameFiContainer">
        <h2>GameFi Supporting</h2>
        <div className="gameFiSelectedContainer">
          <div>
            <img src={genre[genreIndex].img} alt="icon" />
            <div>
              <div className="font-bold text-[1.2rem]">Access Mode:</div>
              <div>{genre[genreIndex].accessMode}</div>
            </div>
            <div className="mt-[1vh] w-[85%] mx-auto">
              {genre[genreIndex].explan}
            </div>
          </div>
        </div>
        <div className="gameFiGenreContainer">
          <div className="gameFiGenre" onClick={() => switchGenre(0)}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/genre_rpg.jpg"}
                alt="rpg"
              />
              <span>RPG</span>
            </div>
          </div>
          <div className="gameFiGenre" onClick={() => switchGenre(1)}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/genre_metaverse.png"}
                alt="meta"
              />
              <span>Metaverse</span>
            </div>
          </div>
          <div className="gameFiGenre" onClick={() => switchGenre(2)}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/genre_mining.png"}
                alt="mining"
              />
              <span>Mining</span>
            </div>
          </div>
          <div className="gameFiGenre" onClick={() => switchGenre(3)}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/genre_x2e.png"}
                alt="x2e"
              />
              <span>X2E</span>
            </div>
          </div>
          <div className="gameFiGenre" onClick={() => switchGenre(4)}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/genre_nft.jpg"}
                alt="nft"
              />
              <span>NFTs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
