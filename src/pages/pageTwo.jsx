import { Settings, SwapVertRounded } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const FirstCard = ({ assets }) => {
  return (
    <Card
      sx={{
        maxWidth: 420,
        borderRadius: "7px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "6px",
      }}
    >
      <CardContent sx={{ display: "flex" }}>
        <FormControl sx={{ m: 1 }} size='small'>
          {" "}
          <TextField
            id='outlined-basic'
            label='0.0'
            variant='outlined'
            size='small'
            sx={{ maxWidth: 120 }}
          />
        </FormControl>{" "}
        <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
          <InputLabel id='action-select'>Select Coin</InputLabel>
          <Select label='Buy or Sell' id='action-label' labelId='action-select'>
            {assets.map((asset) => (
              <MenuItem value={asset.asset_id}>{asset.asset_id}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};
const SecondCard = ({ assets }) => {
  return (
    <Card
      sx={{
        maxWidth: 420,
        borderRadius: "7px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <CardContent sx={{ display: "flex" }}>
        {" "}
        <FormControl sx={{ m: 1 }} size='small'>
          <TextField
            id='outlined-basic'
            label='0.0'
            variant='outlined'
            size='small'
            sx={{ maxWidth: 120 }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
          <InputLabel id='action-select'>Select a token</InputLabel>
          <Select label='Buy or Sell' id='action-label' labelId='action-select'>
            {assets.map((asset) => (
              <MenuItem value={asset.price_usd}>
                {asset.asset_id}&nbsp; &gt; &nbsp;{asset.price_usd}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default function PageTwo() {
  const [swap, setSwap] = React.useState(false);
  const [assets, setAssets] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,BNB,USDT,ADA",
        {
          headers: { "X-CoinAPI-Key": "8E97AAFA-537C-4D28-990E-564BE55E8FA0" },
        }
      )
      .then((res) => {
        setAssets(res.data);
        console.log("RES", res.data);
      });
  }, []);

  console.log("ASSETS", assets);
  return (
    <Card sx={{ maxWidth: 450, borderRadius: "7px", bgcolor: "#F7EEF5" }}>
      <CardHeader
        action={
          <IconButton>
            <Settings />
          </IconButton>
        }
        title='Swap'
      />
      <CardContent>
        {swap === true ? (
          <SecondCard assets={assets} />
        ) : (
          <FirstCard assets={assets} />
        )}
        <IconButton onClick={() => setSwap(!swap)}>
          <SwapVertRounded color='primary' />
        </IconButton>
        {swap === true ? (
          <FirstCard assets={assets} />
        ) : (
          <SecondCard assets={assets} />
        )}
        <Button
          sx={{
            maxWidth: 200,
            borderRadius: "7px",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px",
            marginTop: "20px",
          }}
          color='primary'
          variant='contained'
        >
          Connect Wallet
        </Button>
      </CardContent>
    </Card>
  );
}
