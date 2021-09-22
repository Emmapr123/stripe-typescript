import { StripeError } from "@stripe/stripe-js";
import { ChangeEvent, ChangeEventHandler } from "react";

export interface FieldProps {
    label?: string,
    id: string,
    type: string,
    placeholder: string,
    required: boolean,
    autoComplete?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }

  export interface SubmitButtonProps {
  processing: boolean;
  error?: StripeError;
  children: any;
  disabled: boolean;
}