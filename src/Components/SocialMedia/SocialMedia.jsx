import "./socialMedia.scss";
export default function SocialMedia() {
  return (
    <div className="socialMediaContainer">
      <h2 className="basis-[100%]">Follow Us</h2>
      <div className="flex items-center">
        <span className="pr-[2vw]">LES eSports:</span>
        <a
          href="https://twitter.com/les_web3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/twitter_w.png"}
            alt="twitter"
          />
        </a>
        <a
          href="https://t.me/les_games"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + "/img/telegram_w.png"} alt="tg" />
        </a>
        <a
          href="https://discord.gg/fgx6AAg2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/discord_w.png"}
            alt="discord"
          />
        </a>
      </div>
      <div className="flex items-center">
        <span className="pr-[2vw]">MetaVirus:</span>
        <a
          href=" https://twitter.com/metavirus_games?s=21&t=oyqN0Vci0SpsXLEl3HTyOg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/twitter_w.png"}
            alt="twitter"
          />
        </a>
        <a
          href="https://t.me/MetaVirus_Announcements"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL + "/img/telegram_w.png"} alt="tg" />
        </a>
        <a
          href="https://discord.gg/YsYfT2MU4M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/discord_w.png"}
            alt="discord"
          />
        </a>
      </div>
    </div>
  );
}
