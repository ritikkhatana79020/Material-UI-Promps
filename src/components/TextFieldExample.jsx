import TextField from "@material-ui/core/TextField";

function TextFieldExample() {
    return (
        <>
            <TextField
                variant="filled"
                color="secondary"
                type="date"
                label="Select Date"

            ></TextField>
            <br />
            <TextField
                variant="filled"
                color="secondary"
                type="time"
                label="Select Time"

            ></TextField>
            <br />
            <TextField
                variant="filled"
                color="secondary"
                type="color"
                label="Select Color"

            ></TextField>


        </>
    );
}

export default TextFieldExample;