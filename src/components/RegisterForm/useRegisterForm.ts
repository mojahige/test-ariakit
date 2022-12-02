import { useCallback } from "react";
import { useFormState } from "ariakit/form";
import { z } from "zod";

export const useRegisterForm = () => {
  console.log("useRegisterForm");

  const schema = z.object({
    name: z.string().min(1)
  });

  type Schema = z.infer<typeof schema>;

  const state = useFormState<Schema>({
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
  const validate = useCallback((values: Schema) => {
    console.log(values);
  }, []);

  return { state, nameProps, validate };
};
