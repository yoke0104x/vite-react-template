import * as Icons from '@ricons/material';
import { Icon } from '@ricons/utils';
import React from 'react';
import "./index.css"

type Props = {
    type: keyof typeof Icons,
    size?: number,
    color?: string
} & React.HTMLAttributes<HTMLSpanElement>;

const Index = (props: Props) => {
    const { type, ...rest } = props;

    const IconComponent = Icons[type] as unknown as React.ComponentType;

    return (
        <span {...rest} style={{ width: props?.size ?? 18, height: props?.size ?? 18, display: "inline-block" }}>
            <Icon {...rest} >
                <IconComponent />
            </Icon>
        </span>
    );
}
export default Index;