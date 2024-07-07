'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export interface DatePickerProps {
  value?: string;
  placeholder?: string;
  onChange: (event: any) => void;
  onBlur?: () => void;
}

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { value, placeholder, onChange, ...otherProps } = props;

  const date = value ? new Date(value) : undefined;

  const setDate = (_: any, value: Date, _activeModifiers: any) => {
    onChange({ target: { value: value.toISOString() } });
  };

  return (
    <div>
      {value && <input {...otherProps} value={value} type="hidden" />}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !value && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? (
              format(value, 'PPP')
            ) : (
              <span>{placeholder || 'Pick a date'}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
