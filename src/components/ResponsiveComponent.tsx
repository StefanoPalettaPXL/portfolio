"use client";

import React from 'react';
import useScreenSize from './hooks/useScreenSize';

interface ResponsiveComponentProps {
    children: ({ size }: { size: number; }) => React.ReactElement;
}

const ResponsiveComponent = ({ children }: ResponsiveComponentProps) => {
    const size = useScreenSize();

    return (
        <>
            {children({ size })}
        </>
    );
};

export default ResponsiveComponent;