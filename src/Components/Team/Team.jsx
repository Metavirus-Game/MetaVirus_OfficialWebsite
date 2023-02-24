import Card from "./Card";
import "./team.scss";
export default function Team() {
  return (
    <div className="teamContainer">
      <h2>Core Team</h2>
      <Card
        name="Brice Bian"
        title="Founder and CEO"
        describe="19 years of game production experience. Responsible for online games with millions of revenue. His work 'Gods Killer Online' had  the highest monthly income in Chinese mobile game market, and 'Proud World Online' still maintained 40% of its peak revenue after four years without adding new users.
"
        portrait="/img/portrait_1.png"
      />
      <Card
        name="Marco"
        title="Co-founder & CTO"
        describe="20 years of game development experience. Chief architect of millions of online mobile games. Technical director of large-scale travel VR games."
        portrait="/img/portrait_2.png"
      />
      <Card
        name="Lin"
        title="Core developer"
        describe="Author of China's first Flash3D engine zerO3D, co-developer of globally renowned engine Away3D."
        portrait="/img/portrait_3.png"
      />

      <Card
        name="Belal"
        title="Co-founder & CMO"
        describe="Has led marketing plans for several DeFi products, and NFT projects. Over 7 years of experience in crypto financial services."
        portrait="/img/portrait_4.png"
      />
    </div>
  );
}
