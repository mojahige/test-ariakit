import { FormError as AriakitFormError } from "ariakit/form";
import type { FormErrorProps } from "ariakit/form";
import "./styles.css";

export const FormError = (props: FormErrorProps) => {
  return <AriakitFormError as="p" className="FormError" {...props} />;
};
