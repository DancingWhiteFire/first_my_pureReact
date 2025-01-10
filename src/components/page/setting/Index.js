import React, { useState, useContext } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { colorContext } from "../../context/Index";

const Index = () => {
  const contextColor = useContext(colorContext);
  const [color, setColor] = useState(contextColor.color.back);
  const handleChange = (event) => {
    setColor(event.target.value);
    contextColor.handleColor(event.target.value);
  };
  return (
    <div>
      <h1>Theme</h1>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-select-small-label"
          color={contextColor.color.back}
        >
          Color
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          color={contextColor.color.back}
          value={color}
          label="color"
          onChange={handleChange}
        >
          <MenuItem value="primary">Primary</MenuItem>
          <MenuItem value="success">success</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Index;
