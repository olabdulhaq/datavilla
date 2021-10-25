import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
import { format, sub } from 'date-fns';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    }
  }));

const Form = ({orders, handleSearch}) => {

    const classes = useStyles();

    const [value, setValue] = useState([null, null]);
    // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    // const [product, setProduct] = useState('');
    // const [city, setCity] = useState('');
    // const [stat, setState] = useState('');

    const startDate = value[0];
    const endDate = value[1];

    const currentDate = format(new Date(startDate), 'MM/dd/yyyy')
    const prevDate = format(new Date(endDate), 'MM/dd/yyyy')
    const certainDate = sub(currentDate, prevDate);
    const filteredDates = orders.filter((order )=> order["Order Date"] > certainDate));

    // console.log(currentDate);
    // console.log(prevDate);

    // const handleChangeProduct = (e) => {
    //     setProduct(e.target.value)
    //     console.log(product)
    // };

    // const handleChangeCity = (e) => {
    //     setCity(e.target.value);
    //     console.log(city)
    // };

    // const handleChangeState = (e) => {
    //     setState(e.target.value)
    //     console.log(stat)
    // };

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };

    return (
        <div>
            <form checkMatch={filteredDates} onSubmit={handleSearch}>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        fullWidth
                        required
                        inputVariant="outlined"
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        fullWidth
                        required
                        inputVariant="outlined"
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                        startText="Start Data"
                        endText="End Data"
                        value={value}
                        inputFormat="MM/dd/yyyy"
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                {/* <FormControl
                    fullWidth
                    required
                    variant="outlined"
                    className={classes.margin}
                >
                    <InputLabel id="demo-simple-select-outlined-label">Product</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={product}
                        onChange={handleChangeProduct}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    required
                    variant="outlined"
                    className={classes.margin}
                >
                    <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={city}
                        onChange={handleChangeCity}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    required
                    variant="outlined"
                    className={classes.margin}
                >
                    <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={stat}
                        onChange={handleChangeState}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl> */}
                <div className={classes.margin}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        // className={classes.margin}
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Form
