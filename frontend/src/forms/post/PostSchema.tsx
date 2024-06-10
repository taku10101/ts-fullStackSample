import { z } from "zod";

export const PostSchema = z.object({
  input: z.string().nonempty({
    message: "inputは必須です",
  }),
});
