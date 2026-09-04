/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DeepRequired, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import type { output, ZodType } from "zod";
import z from "zod"

export type Schema = ZodType<any, any>
export type InferData<T> = z.infer<T>
export type FieldValidator<T> = Merge<FieldError, FieldErrorsImpl<DeepRequired<output<T>>>>