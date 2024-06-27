/**
 * Base of this:
 * https://allanlasser.com/posts/2024-01-26-avoid-using-reacts-useformstatus
 */
import { SyntheticEvent, useTransition } from "react";
import { useFormState } from "react-dom";

type Action<FormState> = (
  formState: Awaited<FormState>,
  formData: FormData
) => Promise<FormState>;

export interface UseFormWithPendingProps<FormState> {
  // react-hook-form use form return value type
  form: any;
  action: Action<FormState>;
  formRef: React.RefObject<HTMLFormElement>;
  initialState: Awaited<FormState>;
}

export interface UseFormHook<FormState> {
  formState: FormState;
  isPending: boolean;
  formAction: (payload: FormData) => void;
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
}

export default function useFormWithPending<FormState>(
  props: UseFormWithPendingProps<FormState>
): UseFormHook<FormState> {

  const { action, formRef, initialState, form } = props;
  const [isPending, startTransition] = useTransition();
  const [formState, formAction] = useFormState(action, initialState);

  // client side submit handling
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.handleSubmit(() => {
      startTransition(async () => {
        await formAction(new FormData(formRef.current!));
      });
    })(event);
  };

  return {
    formState,
    isPending,
    formAction,
    onSubmit,
  };
}
