import { FormInput as AriakitFormInput } from "ariakit/form";
import { FormInputProps } from "ariakit/form";
import "./styles.css";

export const FormInput = (props: FormInputProps) => {
  return <AriakitFormInput className="FormInput" {...props} />;
};
