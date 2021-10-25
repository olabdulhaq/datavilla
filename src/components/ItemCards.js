import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import axios from 'axios'
import {config} from '../api'

const ItemCards = () => {
    // const [responseData, setResponseData] = useState([])

    useEffect(() => {
        axios(config)
        .then(function (response) {
          // setResponseData(response.data)
          console.log(response.data);
          
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }, [])

      // responseData.map((item) => (
      //   console.log(item["Product Name"])
      // ))
      // console.log(Object.keys(responseData).length)
      // Array.prototype.groupBy = function(prop) {
      //   return this.reduce(function(groups, item) {
      //     const val = item[prop]
      //     groups[val] = groups[val] || []
      //     groups[val].push(item)
      //     return groups
      //   }, {})
      // };

      // const groupByMake = responseData.groupBy(['Product Name']);
      //   console.log(groupByMake);
      //   console.log(Object.keys(groupByMake).length)

    // console.log("hello")

    return (
        <div>
            <Card>
                <CardHeader
                title="Total order" 
                />
                <CardContent>
                    <Typography align="center">300</Typography>
                </CardContent>
        
            </Card>
        </div>
    )
}

export default ItemCards
