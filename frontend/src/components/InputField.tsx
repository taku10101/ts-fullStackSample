import { Input } from "@yamada-ui/react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
};
export function InputField(props: Props) {
  const methods = useFormContext();
  return (
    <div>
      <Input {...methods.register(props.name)} />
      {methods.formState.errors[props.name] && (
        <p>{methods.formState.errors[props.name]?.message as string}</p>
      )}
    </div>
  );
}
