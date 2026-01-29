import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


//Material UI
export default function Materials() {
  return (
    <div>
      <h4> Button and ButtonGroup </h4>
      <Buttons></Buttons>
      <br/><br/>
      <h4> Grid, Container </h4>
      <Grid container>
        <Grid item size={6}>
          <h4> CheckboxLabels </h4>
          <CheckboxLabels></CheckboxLabels>
        </Grid>
        <Grid item size={6}>     
          <h4> BasicSelect </h4> 
          <BasicSelect></BasicSelect>
        </Grid>  
      </Grid>
    </div>
  )
}

function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  );
}

function Buttons() {
  const[open,setOpen] = useState(false);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <ButtonGroup>
          <Button variant="contained"
          onClick={()=>{ setOpen(true); }}
          >눌러봐</Button>
          <Button variant="outlined">update</Button> 
        </ButtonGroup>
        <Button variant="outlined">delete</Button> 
      </Stack>
      <Dialog open={open}>
        <DialogTitle>CREATE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            create 하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">create</Button>
          <Button variant="outlined"
          onClick={()=>{ setOpen(false); }}
        >cancel</Button> 
        </DialogActions>
      </Dialog> 
    </div>
  )
}  

function BasicSelect() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}