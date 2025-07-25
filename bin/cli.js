#!/usr/bin/env node
const { program } = require('commander');
const { execFile } = require('child_process');
const path = require('path');

program
  .version('1.0.0')
  .description('CLI tool to refactor Angular 20 project files by renaming and updating contents')
  .argument('<projectPath>', 'Path to the Angular project folder')
  .option('-s, --skip-dirs <dirs>', 'Comma-separated list of directories to skip', 'models,partials')
  .option('--replace-file-segments <segments>', 'Comma-separated list of file segments to replace (e.g., services,directives)', 'services,directives')
  .option('--remove-file-segments <segments>', 'Comma-separated list of file segments to remove (e.g., models)', 'models')
  .option('--replace-import-segments <segments>', 'Comma-separated list of import segments to replace (e.g., .service)', '.service')
  .option('--remove-import-segments <segments>', 'Comma-separated list of import segments to remove (e.g., .component,.directive,.model)', '.component,.directive,.model')
  .action((projectPath, options) => {
    const binaryPath = path.join(__dirname, 'angular-v20-file-refactor');
    const args = [
      projectPath,
      '--skip-dirs', options.skipDirs,
      '--replace-file-segments', options.replaceFileSegments,
      '--remove-file-segments', options.removeFileSegments,
      '--replace-import-segments', options.replaceImportSegments,
      '--remove-import-segments', options.removeImportSegments
    ];

    execFile(binaryPath, args, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing refactor binary:', stderr);
        process.exit(1);
      }
      console.log(stdout);
    });
  });

program.parse(process.argv);