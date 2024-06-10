import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../components/InputField";
import { PostSchema } from "./PostSchema";
import { Button } from "@yamada-ui/react";
import "./PostForm.css";

export function PostForm() {
  const methods = useForm({
    //zodResolverでスキーマを指定
    resolver: zodResolver(PostSchema),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        className='Form'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <InputField name='input' />
        <Button className='SubmitButton' type='submit'>
          投稿
        </Button>
      </form>
    </FormProvider>
  );
}
