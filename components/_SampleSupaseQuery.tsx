'use client';
import React, { useRef, useState } from 'react';
import client from '@/utils/supabase/client';

const TestComponent = () => {
  const [addresses, setAddresses] = useState<any>();

  // const inputRef = useRef<HTMLInputElement>(null);
  const sendAddress = async () => {
    try {
      const result = await client.from('projects').insert({
        name: 'First Project',
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={sendAddress}>
      Fetch data
    </button>
  );
};

export default TestComponent;
