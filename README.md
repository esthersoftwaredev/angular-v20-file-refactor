# Angular v20 File Refactor

A CLI tool to automate file renaming and content refactoring for Angular 20 projects. This tool updates file names and TypeScript file contents to align with Angular 20 conventions, handling patterns like `.component`, `.service`, `.directive`, and `.model`.

## Installation

### Global Installation
Install the tool globally to use it from any directory:

```bash
npm install -g angular-v20-file-refactor
```

Run the tool directly:

```bash
angular-v20-file-refactor /path/to/your/angular/project
```

### Local Installation
Install the tool locally within a project:

```bash
npm install angular-v20-file-refactor
```

Run the tool using `npx`:

```bash
npx angular-v20-file-refactor /path/to/your/angular/project
```

Alternatively, add a script to your `package.json`:

```json
{
  "scripts": {
    "refactor": "angular-v20-file-refactor"
  }
}
```

Then run:

```bash
npm run refactor -- /path/to/your/angular/project
```

## Usage

Run the tool on your Angular project by specifying the project folder path. Use the global command or `npx` depending on your installation method.

### Options

- `--skip-dirs <dirs>`: Comma-separated list of directories to skip during processing.  
  **Default**: `models,partials`  
  **Example**: `--skip-dirs models,tests` skips the `models` and `tests` directories.

- `--replace-file-name-segments <segments>`: Comma-separated list of file name segments to replace with a hyphenated version (e.g., `.service` becomes `-service` in the `services` folder).  
  **Default**: `services,directives`  
  **Example**: `--replace-file-name-segments services,pipes` replaces `.service` with `-service` in the `services` folder.

- `--remove-file-name-segments <segments>`: Comma-separated list of file name segments to remove (e.g., `.model` is removed from file names in the `models` folder).  
  **Default**: `models`  
  **Example**: `--remove-file-name-segments models,utils` removes `.model` from file names in the `models` folder.

- `--replace-import-segments <segments>`: Comma-separated list of import segments to replace (e.g., `.service` becomes `-service` in import statements).  
  **Default**: `.service`  
  **Example**: `--replace-import-segments .service` replaces `.service` with `-service` in imports.

- `--remove-import-segments <segments>`: Comma-separated list of import segments to remove from import statements.  
  **Default**: `.component,.directive,.model`  
  **Example**: `--remove-import-segments .component,.directive` removes these segments from imports.

### Example

Run the tool on a specific Angular project folder with custom options:

```bash
# Global installation
angular-v20-file-refactor D:\\Estee\\Programming\\My-Projects\\angular-app\\src\\app --skip-dirs models,tests --replace-file-name-segments services,pipes --remove-file-name-segments models,utils

# Local installation with default options
npx angular-v20-file-refactor D:\\Estee\\Programming\\My-Projects\\angular-app\\src\\app --skip-dirs models,partials --replace-file-name-segments services,directives --remove-file-name-segments models --replace-import-segments .service --remove-import-segments .component,.directive,.model

# Local installation with custom options
npx angular-v20-file-refactor D:\\Estee\\Programming\\My-Projects\\angular-app\\src\\app --skip-dirs models,tests --replace-file-name-segments services,pipes --remove-file-name-segments models,utils

# Using package.json script
npm run refactor -- D:\\Estee\\Programming\\My-Projects\\angular-app\\src\\app --skip-dirs models,tests --replace-file-name-segments services,pipes --remove-file-name-segments models,utils
```

## Compatibility

This tool has been tested on Windows and works reliably. I’d love to hear how it performs on other operating systems like macOS or Linux! Please share your experience or report issues at [github.com/esthersoftwaredev/angular-v20-file-refactor/issues](github.com/esthersoftwaredev/angular-v20-file-refactor/issues).

## License

MIT License. See [LICENSE](./LICENSE) for details.

## Author

Esther White [esthersoftwaredev](https://github.com/esthersoftwaredev)

## Repository

[github.com/esthersoftwaredev/angular-v20-file-refactor](https://github.com/esthersoftwaredev/angular-v20-file-refactor)

## Issues

Report bugs or suggest improvements at [github.com/esthersoftwaredev/angular-v20-file-refactor/issues](https://github.com/esthersoftwaredev/angular-v20-file-refactor/issues).