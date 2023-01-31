import Card from "./Card";
import "./team.scss";
export default function Team() {
  return (
    <div className="teamContainer">
      <h2>Core Team</h2>
      <Card
        name="Brice Bian"
        title="Founder & Game Producer"
        describe="More than 17 years of experience in game development and more than 4 years of experience in blockchain game development. 
Head of the development and operation team of several tens of millions revenue of traditional online game products."
        portrait="/img/portrait_1.png"
      />
      <Card
        name="TT"
        title="Co-founder & CTO"
        describe="More than 18 years of experience in game development. 
Chief Architect and Technical Director of Million Online Traditional Online Game Products. 
Technical director of large scale VR game products."
        portrait="/img/portrait_2.png"
      />
      <Card
        name="Qilin"
        title="Co-founder & COO"
        describe="Plentiful practical experience in the fields of blockchain, finance and media.
Operated several successful projects in the blockchain field, managed and operated millions of members communities, and was solely responsible for operating a blockchain distributed overseas storage branch."
        portrait="/img/portrait_3.png"
      />

      <Card
        name="Belal"
        title="Co-founder & CMO"
        describe="More than 7 years of experience in non crypto financial services and 5 years of marketing experience in crypto startups. Led the marketing initiatives for a few crypto exchanges, DeFi products, and NFT projects."
        portrait="/img/portrait_4.png"
      />
    </div>
  );
}
