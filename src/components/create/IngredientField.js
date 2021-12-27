import { Fab, TextField } from '@mui/material'
import { Remove } from '@mui/icons-material'

/*
  props: {
    value: {name, amount}
    onChange: function
  }
*/

const IngredientField = (props) => {
  const ChangeHandler = props.onChange

  const handleFieldChange = (fieldName) => (event) => {
    let newValues = { ...props.value }; //Copy values object

    //Change the associated parameter
    if (fieldName === "name") newValues.name = event.target.value;
    if (fieldName === "amount") newValues.amount = event.target.value;

    //Call change handler of parent component
    ChangeHandler(newValues, props.id);
  }

  return (
    <div>
      <TextField
        id="name"
        label="Name"
        value={props.value.name}
        onChange={handleFieldChange("name")}
      />
      <TextField
        id="amount"
        label="Amount"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={props.value.amount}
        onChange={handleFieldChange("amount")}
      />
      <Fab
        color="primary"
        size="small"
        aria-label="remove"
        onClick={() => {props.onRemove(props.id)}}
      >
        <Remove />
      </Fab>
    </div>
  )
}

export default IngredientField