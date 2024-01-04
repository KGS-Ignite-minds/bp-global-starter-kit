import { gridSpacing } from './constant';
import { Box, Card, Grid } from '@mui/material';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';

import './Starter.css';
const App_form = () => {
  return (<>

    <div className="form-wrapper">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>


          <Grid container spacing={gridSpacing}>

            {/* <Grid item xs={12} sm={6} md={4} lg={3}> */}


            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* <ShadowBox shadow="22" app={item} /> */}
              <label> Project Name</label>
              <FormControl fullWidth sx={{ m: 1 }}>
                {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
                <OutlinedInput
                  id="outlined-adornment-amount"


                />
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
            <label> Select Version</label>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>1.1</MenuItem>
                  <MenuItem value={20}>1.2</MenuItem>
                  <MenuItem value={30}>1.3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
            <label> UI Framework</label>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Bootstrap</MenuItem>
                  <MenuItem value={20}>Material UI</MenuItem>
                  {/* <MenuItem value={30}>1.3</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
            <label> State Management</label>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                  {/* <MenuItem value={30}>1.3</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
            <label> Unit Testing</label>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Yes</MenuItem>
                  <MenuItem value={20}>No</MenuItem>
                  {/* <MenuItem value={30}>1.3</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6}>
            <label> Api Configuration</label>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Axios</MenuItem>
                  {/* <MenuItem value={20}>No</MenuItem> */}
                  {/* <MenuItem value={30}>1.3</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>


          </Grid>
          {/* </SubCard> */}

        </Grid>
      </Grid>
    </div>

  </>);
};
export default App_form;