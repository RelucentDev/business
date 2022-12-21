# Relucent Business NPM Packages (npm.pkg.github.com)

This repository also contains a number of brand and business-related packages.
Some of the packages in this repository may not be publically published to a
package repository, however, you are more than welcome to use them from this
repository.

## Installation

Add the following to a ```.npmrc``` file.

```txt
@relucent-software:registry=https://npm.pkg.github.com
//npm.pkg.github.com:_authToken=${GITHUB_TOKEN}
```

### Logos - @relucent-software/logos

```bash
npm install @relucent-software/logos
```

### Colors - @relucent-software/colors (private)

```bash
npm install @relucent-software/colors
```

### TailwindCSS Preset - @relucent-software/tailwindcss-preset (private)

```bash
npm install @relucent-software/tailwindcss-preset
```

### React Accreditation - @relucent-software/accreditation-react (private)

```bash
npm install @relucent-software/accreditation-react
```

## Usage

**Build all packages**:

```bash
npx lerna run build
```

**Version packages**:

```bash
npx lerna version
```

**Publish packages**:

```bash
# This will be done in a CI environment
```
