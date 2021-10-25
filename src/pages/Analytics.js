// import "date-fns";
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import ChartOverview from "../components/ChartOverview";
import Form from "../components/Form";
// import {config} from '../api'
import axios from 'axios'
import TableData from "../components/TableData";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  // box: {
  //   display: "flex",
  //   marginTop: theme.spacing(3)
  // },
  // leftBox: {
  //   flex: 1,
  //   backgroundColor: "red",
  //   marginRight: "1%",
  
  // },
  // rightBox: {
  //   flex: "0 0 25%",
  //   backgroundColor: "blue"
  // }
}));

const Analytics = () => {
  const classes = useStyles();

  const [responseData, setResponseData] = useState(null)

  const fetchData = () => {
    const data = JSON.stringify({
      "angular_test": "angular-developer"
    });  
    const config = {
      method: 'post',
      url: 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
   
    axios(config)
    .then(function (response) {
      // console.log(response.data);
      setResponseData(response.data)
    })
    .catch(function (error) {
      // console.log(error);
    });
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData()
}

  return ( 
  <>
  <div>
    <Box className={classes.box}>
      <Form handleSearch={handleSearch} />
      {responseData && <TableData orders={responseData} />}
      <ChartOverview />
    </Box>
    </div>
  </>
  )
};

export default Analytics;
