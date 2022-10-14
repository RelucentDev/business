'use strict';
/**
 * Relucent Colors.
 *
 * @package   Relucent\Colors
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

import chroma from 'chroma-js';

const colorSamplePoints = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function scaleToSamplePoints(
    scale: chroma.Scale,
    samplePoints: number[]
) {
    const samples: {
        [key: string]: string
    } = {};

    samplePoints.forEach(
        (samplePoint) => {
        samples[samplePoint] = scale(samplePoint).hex();
        },
    );

    return samples;
}

function upDownScaleColor(
    color: string | number | chroma.Color
) {
    const colorChroma = chroma(color);
    return [
        colorChroma.darken(4),
        colorChroma,
        colorChroma.brighten(5),
    ];
}

const defaultDomain = [
    1000,
    500,
    0,
];

const functionalScales = {
    blue: chroma.scale(upDownScaleColor('#3083DC'))
        .domain(defaultDomain),
    purple: chroma.scale(upDownScaleColor('#8C63AF')) // #9368B7 #8C63AF #855EA6 #765395
        .domain(defaultDomain),
    yellow: chroma.scale(upDownScaleColor('#FFBF00'))
        .domain(defaultDomain),
    red: chroma.scale(upDownScaleColor('#FC440F'))
        .domain(defaultDomain),
    green: chroma.scale(upDownScaleColor('#40C9A2'))
        .domain(defaultDomain),
    teal: chroma.scale(upDownScaleColor('#00B8D9'))
    .   domain(defaultDomain),
    neutral: chroma.scale([
        '#10132A',
        '#FFFFFF',
    ])
        .domain([
            900,
            0,
        ]),
};

const colors = {
    blue: {
        ...scaleToSamplePoints(functionalScales.blue, colorSamplePoints),
        DEFAULT: functionalScales.blue(700).hex(),
    },
    purple: {
        ...scaleToSamplePoints(functionalScales.purple, colorSamplePoints),
        DEFAULT: functionalScales.purple(500).hex(),
    },
    yellow: {
        ...scaleToSamplePoints(functionalScales.yellow, colorSamplePoints),
        DEFAULT: functionalScales.yellow(500).hex(),
    },
    red: {
        ...scaleToSamplePoints(functionalScales.red, colorSamplePoints),
        DEFAULT: functionalScales.red(500).hex(),
    },
    green: {
        ...scaleToSamplePoints(functionalScales.green, colorSamplePoints),
        DEFAULT: functionalScales.green(500).hex(),
    },
    teal: {
        ...scaleToSamplePoints(functionalScales.teal, colorSamplePoints),
        DEFAULT: functionalScales.teal(500).hex(),
    },
    neutralDark: {
        ...scaleToSamplePoints(functionalScales.neutral, [900, 800, 700, 600, 500]),
        DEFAULT: functionalScales.neutral(900).hex(),
    },
    neutralMid: {
        ...scaleToSamplePoints(functionalScales.neutral, [400, 300, 200, 100, 90, 80, 70, 60]),
    },
    neutralLight: {
        ...scaleToSamplePoints(functionalScales.neutral, [50, 40, 30, 20, 10, 0]),
        DEFAULT: functionalScales.neutral(0).hex(),
    }
};

const palettes = {
    primary: {
        blue: colors.blue.DEFAULT,
        dark: colors.neutralDark.DEFAULT,
        light: colors.neutralLight.DEFAULT,
    },
    secondary: {
        red: colors.red.DEFAULT,
        yellow: colors.yellow.DEFAULT,
        green: colors.green.DEFAULT,
        teal: colors.teal.DEFAULT,
        purple: colors.purple.DEFAULT,
    },
};

export default colors;
export {
    palettes
};
