import React from 'react';
export interface SpectrumData {
    frequency: number;
    bandwidth: number;
    time: number;
    fftBins: Float32Array;
}
export interface SpectrumWaterfallProps {
    data: SpectrumData[];
    running?: boolean;
    playbackMode?: 'live' | 'replay';
    refLevel?: number;
    displayRange?: number;
    averaging?: number;
    showPeakHold?: boolean;
    colorMap?: string;
    waterfallScaleMode?: 'auto' | 'fixed';
    waterfallFixedMinDb?: number;
    waterfallFixedMaxDb?: number;
    className?: string;
    targetRate?: number;
    jitterBufferMs?: number;
    onRefLevelChange?: (val: number) => void;
    onDisplayRangeChange?: (val: number) => void;
    onWaterfallFixedRangeChange?: (minDb: number, maxDb: number) => void;
}
export declare const SpectrumWaterfall: React.FC<SpectrumWaterfallProps>;
