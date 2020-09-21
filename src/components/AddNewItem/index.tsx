import React from "react";

// import { Container } from './styles';
import { Card, Button, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddNewItem: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <Button color="inherit" component={Card} className={classes.root}>
      <Add color="action" />
    </Button>
  );
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
  }, // a style rule
  label: {}, // a nested style rule
});
export default AddNewItem;
