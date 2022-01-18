import ResizableBox from './ResizableBox';

import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import Amps from './amps.json';
import Ampsd from './ampsd.json';

export interface AgaCharProps {}

const MyChart: React.FC<AgaCharProps> = () => {
    const primaryAxis = React.useMemo<
        AxisOptions<{
            primary: string | number | Date | null;
            secondary: number | null;
            radius: number | undefined;
        }>
    >(
        () => ({
            getValue: (datum) => datum.primary as unknown as Date,
        }),
        [],
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<{
            primary: string | number | Date | null;
            secondary: number | null;
            radius: number | undefined;
        }>[]
    >(
        () => [
            {
                getValue: (datum) => datum.secondary,
                elementType: 'bubble',
            },
        ],
        [],
    );
    const ampsData = { label: 'amps', data: Amps.map(({ x, y }) => ({ primary: x, secondary: y, radius: 10 })) };
    const ampsdData = { label: 'ampsd', data: Ampsd.map(({ x, y }) => ({ primary: x, secondary: y, radius: 10 })) };

    const data = [ampsData, ampsdData];
    return (
        <>
            <ResizableBox width={1600} height={800}>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                        interactionMode: 'closest',
                        getDatumStyle: (datum) =>
                            ({
                                circle: { r: datum.originalDatum.radius },
                            } as any),
                    }}
                />
            </ResizableBox>
        </>
    );
};

export { MyChart };
