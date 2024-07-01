'use client';
import React, { FC, useEffect, useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import schema from './formSchema';
import useFormWithPending from '@/hooks/useFormWithPending';

interface LoginFormProps {
  login: (prevState: any, formData: FormData) => any;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { login } = props;
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { formState, isPending, formAction, onSubmit } = useFormWithPending({
    form,
    action: login,
    formRef,
    initialState: {
      errors: [],
      genericError: null,
    },
  });

  useEffect(() => {
    form.clearErrors();
    if (!formState?.errors) return;

    formState.errors.forEach(({ name, message }: any) => {
      form.setError(name, { message });
    });
  }, [formState?.errors]);

  const renderGenericError = () => {
    if (!formState?.genericError) return;

    return (
      <Alert variant="destructive">
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{formState.genericError}</AlertDescription>
      </Alert>
    );
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={onSubmit}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} type="submit" className="w-full">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Submit
        </Button>
        {renderGenericError()}
      </form>
    </Form>
  );
};

export default LoginForm;
