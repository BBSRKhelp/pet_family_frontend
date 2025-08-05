import { Autocomplete, Box, TextField } from "@mui/material";

type AutocompleteProps = {
  options: string[];
  label: string;
};

export function CustomAutocomplete(props: AutocompleteProps) {
  return (
    <Box display="flex" flexDirection="column" mb={1}>
      <div className="label text-gray-500 mb-1">{props.label}</div>
      <Autocomplete
        size="small"
        options={props.options}
        defaultValue={props.options[0]}
        getOptionLabel={(option) => option}
        slotProps={{
          popper: {
            sx: {
              "& .MuiAutocomplete-option": {
                color: "grey",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              },
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "grey",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                height: "2rem",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#f77070",
                  color: "grey",
                },
              },
            }}
          />
        )}
      />
    </Box>
  );
}
