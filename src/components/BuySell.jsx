import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  AppBar,
  Button,
  CardActionArea,
  Divider,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const assets = useSelector((state) => state.assets);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      sx={{ maxWidth: "100%", height: "97%", bgcolor: "Background.paper" }}
    >
      {" "}
      <Box sx={{ height: "97%" }}>
        <AppBar position='static' color='default'>
          {" "}
          <Tabs sx={{ width: "100%" }}>
            <Tab
              label='BUY'
              sx={{ marginLeft: "40px", marginRight: "40px" }}
            ></Tab>
            <Divider orientation='vertical' flexItem />
            <Tab label='SELL' sx={{ marginLeft: "40px" }}></Tab>
          </Tabs>
        </AppBar>
        <Card
          sx={{
            maxWidth: 420,
            borderRadius: "7px",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "6px",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Coin Name
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
              <InputLabel id='action-select'>Select Coin</InputLabel>
              <Select
                label='Buy or Sell'
                id='action-label'
                labelId='action-select'
              >
                {assets?.map((asset) => (
                  <MenuItem value={asset?.asset_id}>{asset?.asset_id}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 420,
            borderRadius: "7px",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "6px",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Amount (USD)
            </Typography>
            <Typography>$ 52696.24</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 420,
            borderRadius: "7px",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "6px",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Amount (BTC)
            </Typography>
            <Typography variant=''>0.17321536</Typography>
          </CardContent>
        </Card>

        <CardActionArea
          sx={{
            borderRadius: "7px",

            marginBottom: "6px",
            marginTop: "20px",
          }}
        >
          {" "}
          <Button variant='contained' color='primary' sx={{ width: "90%" }}>
            Buy BTC
          </Button>
        </CardActionArea>
      </Box>
    </Paper>
  );
}
