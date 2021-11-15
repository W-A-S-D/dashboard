import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import * as React from 'react';

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '10%',
    },
  },
};

const names = [
  'League of Legends',
  'TFT',
  'Valorant'
];

export default function SelectSector() {
  const [sectorName, setSectorName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSectorName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: '12vw' }}>
        <InputLabel id="demo-multiple-checkbox-label">Setor</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={sectorName}
          onChange={handleChange}
          input={<OutlinedInput label="Setor" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={sectorName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}