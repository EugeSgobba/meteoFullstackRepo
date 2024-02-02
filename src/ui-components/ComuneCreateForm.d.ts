/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComuneCreateFormInputValues = {
    name?: string;
};
export declare type ComuneCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComuneCreateFormOverridesProps = {
    ComuneCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComuneCreateFormProps = React.PropsWithChildren<{
    overrides?: ComuneCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ComuneCreateFormInputValues) => ComuneCreateFormInputValues;
    onSuccess?: (fields: ComuneCreateFormInputValues) => void;
    onError?: (fields: ComuneCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComuneCreateFormInputValues) => ComuneCreateFormInputValues;
    onValidate?: ComuneCreateFormValidationValues;
} & React.CSSProperties>;
export default function ComuneCreateForm(props: ComuneCreateFormProps): React.ReactElement;
