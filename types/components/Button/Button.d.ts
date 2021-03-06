import * as React from 'react';
import { ComplexAction } from '../../types';
import { Props as IconProps } from '../Icon';
export declare type Size = 'slim' | 'large';
export interface Props {
    url?: string;
    children?: string;
    size?: Size;
    fullWidth?: boolean;
    primary?: boolean;
    outline?: boolean;
    destructive?: boolean;
    disabled?: boolean;
    loading?: boolean;
    plain?: boolean;
    external?: boolean;
    submit?: boolean;
    disclosure?: boolean;
    accessibilityLabel?: string;
    icon?: IconProps['source'];
    onClick?(): void;
    onFocus?(): void;
    onBlur?(): void;
}
export default function Button({url, disabled, loading, children, accessibilityLabel, onClick, onFocus, onBlur, external, icon, primary, outline, destructive, disclosure, plain, submit, size, fullWidth}: Props): any;
export declare function buttonsFrom(action: ComplexAction, overrides?: Partial<Props>): React.ReactElement<Props>;
export declare function buttonsFrom(actions: ComplexAction[], overrides?: Partial<Props>): React.ReactElement<Props>[];
export declare function buttonFrom({content, onAction, ...action}: ComplexAction, overrides?: Partial<Props>, key?: any): any;
