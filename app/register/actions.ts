"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import schema from "./formSchema";

export async function register(prevState: any, formData: FormData) {
  let redirectPath = null;

  try {
    const supabase = createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      passwordConfirmation: formData.get("passwordConfirmation") as string,
    };

    const validation = schema.safeParse(data);
    if (!validation.success) {
      const errors = validation.error.issues.map((issue) => {
        return {
          name: issue.path[0],
          message: issue.message,
        };
      });

      return { errors };
    }

    const { error } = await supabase.auth.signUp(data);
    console.log(error);

    if (error) {
      return { genericError: error.message };
    } else {
      revalidatePath("/", "layout");
      redirectPath = "/";
    }
  } catch (error) {
    console.log(error);
    return {
      genericError: "Something went wrong. Please try again later.",
    };
  } finally {
    if (redirectPath) redirect(redirectPath);
  }
}
