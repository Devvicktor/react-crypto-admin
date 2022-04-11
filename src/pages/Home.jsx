import { Grid } from "@mui/material";
import React from "react";
import RecipeReviewCard from "../components/BuySell";
import CryptoChart from "../components/chart";
import RecentActivity from "../components/RecentAcivity";
import EnhancedTable from "../components/Table";

export default function HomePage() {
  return (
    <div>
      {" "}
      <Grid container spacing={3}>
        <Grid item xs={9} md={9} lg={9} xlg={9}>
          <EnhancedTable />
        </Grid>

        <Grid item xs={3} md={3} lg={3} xlg={3} style={{ marginLeft: "auto" }}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: "auto" }}>
        <Grid item xs={6} md={6} lg={6} xlg={6}>
          <RecentActivity />
        </Grid>

        <Grid item xs={6} md={6} lg={6} xlg={6} style={{ marginLeft: "auto" }}>
          <CryptoChart />
        </Grid>
      </Grid>
    </div>
  );
}
