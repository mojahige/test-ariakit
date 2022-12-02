import { Form } from "ariakit/form";
import { FormLabel } from "../FormLabel";
import { FormInput } from "../FormInput";
import { FormError } from "../FormError";
import { useRegisterForm } from "./useRegisterForm";

export const RegisterForm = () => {
  const { state, nameProps } = useRegisterForm();

  return (
    <>
      <p>valid: {String(state.valid)}</p>
      <Form state={state}>
        <FormLabel name={state.names.name}>Name</FormLabel>
        <FormInput {...nameProps} />
        <FormError name={state.names.name} />
      </Form>

      <p
        style={{
          fontSize: "0.8rem",
          textAlign: "left",
        }}
      >
        {JSON.stringify({
          errors: state.errors,
        })}
      </p>
    </>
  );
};
