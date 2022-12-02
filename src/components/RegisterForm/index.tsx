import { Form, useFormState } from "ariakit/form";
import { FormLabel } from "../FormLabel";
import { FormInput } from "../FormInput";
import { FormError } from "../FormError";
// import { useRegisterForm } from "./useRegisterForm";

export const RegisterForm = () => {
  console.log("RegisterForm");
  // const { state, nameProps, validate } = useRegisterForm();

  // state.useValidate(() => {
  //   validate(state.values);
  // });
  const state = useFormState({
    defaultValues: {
      name: "aria"
    }
  });
  const nameProps = {
    name: state.names.name,
    required: true,
    minLength: 1,
    type: "text"
  };

  return (
    <>
      <Form state={state}>
        <FormLabel name={state.names.name}>Name</FormLabel>
        <FormInput {...nameProps} />
        <FormError name={state.names.name} />
      </Form>
      <p
        style={{
          fontSize: "0.8rem",
          textAlign: "left"
        }}
      >
        {JSON.stringify(state.names)}
      </p>
    </>
  );
};
