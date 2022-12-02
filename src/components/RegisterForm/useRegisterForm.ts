import { useFormState } from "ariakit/form";
import { z, ZodError } from "zod";
import type { FormInputProps } from "ariakit/form";

const schema = z.object({
  name: z.string().min(1),
});
const schemaKey = schema.keyof();

type Schema = z.infer<typeof schema>;

const nameProps: FormInputProps = {
  name: schemaKey.Enum.name,
  required: true,
  type: "text",
};

export const useRegisterForm = () => {
  const state = useFormState<Schema>({
    defaultValues: {
      name: "aria",
    },
  });

  state.useValidate(() => {
    try {
      schema.parse(state.values);
      state.setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // 🤔🤔🤔
        state.setError(state.names.name.toString(), error.issues[0].message);
      }
    }
  });

  return { state, nameProps };
};
