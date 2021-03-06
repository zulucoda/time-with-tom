import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { COLOURS, GRADIENTS, SHADOWS } from '../../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '85vh',
    backgroundColor: COLOURS.DARK_BLUE,
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6),
    },
    background: GRADIENTS.BLUE,
    boxShadow: SHADOWS.BLUE,
    color: 'white',
  },
}));

const TableLayout = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
};

export default TableLayout;
