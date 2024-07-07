'use client';
import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import useFormWithPending from '@/hooks/useFormWithPending';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { DatePicker } from './ui/datepicker';

interface ProjectCreateFormProps {
  formSubmit: (prevState: any, formData: FormData) => any;
}

const schema = z.object({
  name: z.string().trim().min(1, 'Please enter a project name'),
  client: z.string().trim().optional(),
  start_date: z.string().datetime().optional(),
  end_date: z.string().datetime().optional(),
});

const ProjectCreateForm: FC<ProjectCreateFormProps> = (props) => {
  const { formSubmit } = props;
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      client: '',
      start_date: undefined,
    },
  });

  const { formState, isPending, formAction, onSubmit } = useFormWithPending({
    form,
    action: formSubmit,
    formRef,
    initialState: {
      errors: [],
      genericError: null,
    },
  });

  return (
    <Form {...form}>
      <form ref={formRef} action={formAction} onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <DatePicker {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <DatePicker {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isPending} type="submit" className="w-full mt-6">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ProjectCreateForm;
