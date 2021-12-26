import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
function CheckboxExample(){

    const[checked,setChecked] = useState(false);

    return(
        <div>
           <FormControlLabel 
           control={
            <Checkbox  
            checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}
            icon={<SaveIcon />}
            checkedIcon={<DeleteIcon />}
            />
           }
           label="Testing Checkbox"
           />
           
        </div>
    );
}

export default CheckboxExample;