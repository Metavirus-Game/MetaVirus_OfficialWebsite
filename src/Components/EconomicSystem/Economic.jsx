import { Box, Grid } from "@mui/material";
import "./economicSystem.scss";

const SystemComp = ({ img, children, delay, isLoaded }) => (
  <Grid
    container
    item
    md={5}
    xs={10}
    sx={{
      borderRadius: "10px",
      overflow: "hidden",
      marginY: "10px",
      minHeight: "270px",
    }}
    className={
      isLoaded
        ? "animate__animated animate__fadeIn animate__delay-" + delay + "s"
        : "unloaded"
    }
  >
    <Grid item xs={12} sm={5}>
      <img
        src={process.env.PUBLIC_URL + img}
        className="w-full h-full object-cover"
        alt="img"
      />
    </Grid>
    <Grid item xs={12} sm={7}>
      <Box className="bg-black w-full h-full flex items-center">
        <Box className="p-5">{children}</Box>
      </Box>
    </Grid>
  </Grid>
);

export default function EconomicSystem({ isLoaded }) {
  return (
    <div className="ecoSysContainer">
      <Grid container justifyContent={"space-evenly"}>
        <SystemComp img="/img/3.jpg" isLoaded={isLoaded} delay={0}>
          <h4>GameFi Thinking</h4>
          <p>F2P (Free to Play) free game forever.</p>
          <p>P2E (Play to Earn) Earn money while playing.</p>
          <p>Incentivize Crypto and asset trading behavior among players.</p>
        </SystemComp>

        <SystemComp img="/img/19.jpg" isLoaded={isLoaded} delay={1}>
          <h4>Income Distribution</h4>
          <p>Players acquire resources and currency through in-game labor.</p>
          <p>
            Game teams and investors get game tax dividends by holding
            governance tokens.
          </p>
          <p>
            Decentralized smart contracts realize automatic distribution of
            income.
          </p>
        </SystemComp>

        <SystemComp img="/img/15.jpg" isLoaded={isLoaded} delay={2}>
          <h4>Crypto Circulation</h4>
          <p>Players will never be able to recharge in-game.</p>
          <p>
            All demand currency comes from game output or exchange purchasePlay
            to earn game currency and NFT (scarce resource non-fungible token)
          </p>
        </SystemComp>

        <SystemComp img="/img/4.jpg" isLoaded={isLoaded} delay={3}>
          <h4>Resource Recycling</h4>
          <p>
            Production and maintenance of scarce resources consumes resources
            and money.
          </p>
          <p>
            Combat and labor deplete basic resources Taxes arising from any
            transaction
          </p>
        </SystemComp>
      </Grid>
    </div>
  );
}
