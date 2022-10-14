import ColorContrastChecker from 'color-contrast-checker';
import colors, { palettes } from '@relucent-software/colors';
import './styles.css';

console.log(ColorContrastChecker);
console.log(colors, palettes);

const ccc = new ColorContrastChecker();
const comboColorsPalettes = {
  ...colors,
  ...palettes,
};

Object.keys(comboColorsPalettes).forEach(
  (colorsKey) => {
      const colorScale = comboColorsPalettes[colorsKey];

      const colorScaleElement = document.createElement('div');
      colorScaleElement.setAttribute("class", "row")
      colorScaleElement.style.marginBottom = "50px";

      Object.keys(colorScale).forEach(
          (colorScaleKey) => {
              if (colorScaleKey === 'DEFAULT') {
                return;
              }

              const colorScalePoint = colorScale[colorScaleKey];

              const contrastThresholdAAA = 7;
              const contrastThresholdAAALarge = 4.5;
              const contrastThresholdAA = 4.5;
              const contrastThresholdAALarge = 3;

              const whiteContrastSmall = ccc.checkPairs([{
                colorA: colorScalePoint,
                colorB: '#FFFFFF',
                fontSize: 14,
              }]);
              const blackContrastSmall = ccc.checkPairs([{
                colorA: colorScalePoint,
                colorB: '#10132a',
                fontSize: 14,
              }]);
              const whiteContrastLarge = ccc.checkPairs([{
                colorA: colorScalePoint,
                colorB: '#FFFFFF',
                fontSize: 14,
              }]);
              const blackContrastLarge = ccc.checkPairs([{
                colorA: colorScalePoint,
                colorB: '#10132a',
                fontSize: 14,
              }]);

              const pointTemplate = `
                  <div class="cell ${'DEFAULT' in colorScale && colorScale.DEFAULT === colorScalePoint ? 'DEFAULT' : ''}" style="background-color: ${colorScalePoint};">
                      ${'DEFAULT' in colorScale && colorScale.DEFAULT === colorScalePoint ? '<span class="legend">DEFAULT</span>' : ''}
                      <span class="legend">${colorsKey.charAt(0)}${colorScaleKey}</span>
                      <span class="legend">${colorScalePoint}</span>
                      <span class="legend" style="color: #ffffff">
                        <span style="font-size: 14px;">${whiteContrastSmall[0].WCAG_AA ? 'AA;' : ''}</span>
                        <span style="font-size: 14px;">${whiteContrastSmall[0].WCAG_AAA ? 'AAA;' : ''}</span>
                      </span>
                      <span class="legend" style="color: #10132a;">
                        <span style="font-size: 14px;">${blackContrastSmall[0].WCAG_AA ? 'AA;' : ''}</span>
                        <span style="font-size: 14px;">${blackContrastSmall[0].WCAG_AAA ? 'AAA;' : ''}</span>
                      </span>
                      <span class="legend" style="color: #ffffff">
                        <span style="font-size: 24px;">${whiteContrastLarge[0].WCAG_AA ? 'AA;' : ''}</span>
                        <span style="font-size: 24px;">${whiteContrastLarge[0].WCAG_AAA ? 'AAA;' : ''}</span>
                      </span>
                      <span class="legend" style="color: #10132a;">
                        <span style="font-size: 24px;">${blackContrastLarge[0].WCAG_AA ? 'AA;' : ''}</span>
                        <span style="font-size: 24px;">${blackContrastLarge[0].WCAG_AAA ? 'AAA;' : ''}</span>
                      </span>
                  </div>
              `;

              colorScaleElement.innerHTML += pointTemplate;
          }
      );

      document.body.appendChild(colorScaleElement);
  }
);