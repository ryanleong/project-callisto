'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

const ActionCreateForm = async (prevState: any, formData: FormData) => {
  let redirectPath = null;

  try {
    const supabase = await createClient();

    const data = {
      name: formData.get('name') as string,
      client: formData.get('client') as string,
      start_date: formData.get('start_date') as string,
      end_date: formData.get('end_date') as string,
    };

    const { error } = await supabase.from('projects').insert(data);

    if (error) {
      return { error: error.message };
    } else {
      revalidatePath('/', 'layout');
      redirectPath = '/dashboard';
    }
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  } finally {
    if (redirectPath) redirect(redirectPath);
  }
};

export default ActionCreateForm;
