import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function DateInput({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? moment(input.value) : null}
        onChange={input.onChange}
      />
      {touched &&
        error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
    </Form.Field>
  );
}

export default DateInput;
