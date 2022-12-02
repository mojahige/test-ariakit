import { FormLabel as AriakitFormLabel } from "ariakit/form";
import type { FormLabelProps } from "ariakit/form";
import "./styles.css";

export const FormLabel = (props: FormLabelProps) => {
  return <AriakitFormLabel className="FormLabel" {...props} />;
};
