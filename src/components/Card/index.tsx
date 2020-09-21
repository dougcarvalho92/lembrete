import React from "react";

import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red, yellow } from "@material-ui/core/colors";
import { Grid, useTheme } from "@material-ui/core";
import {
  CheckCircle,
  Edit,
  EditAttributes,
  RemoveCircle,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: red[500],
    },
  })
);
interface PageHeaderProps {
  title: String;
  description?: String;
}
const RememberCard: React.FC<PageHeaderProps> = (props) => {
  const classes = useStyles();
  const { palette } = useTheme();

  return (
    <Card>
      <CardHeader
        title={props.title}
        avatar={
          <Avatar aria-label="level" className={classes.avatar}>
            A
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="finish">
          <CheckCircle />
        </IconButton>
        <IconButton aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="remove">
          <RemoveCircle />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default RememberCard;
