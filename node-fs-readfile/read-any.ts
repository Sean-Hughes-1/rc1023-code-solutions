import { promises as fsPromises } from 'node:fs';

async function readAnyFile(): Promise<void> {
  try {
    if (process.argv.length < 3) {
      console.error('Usage: ts-node read-any.ts <file-path>');
      return;
    }
    const filePath = process.argv[2];
    const fileContents = await fsPromises.readFile(filePath, 'utf-8');
    console.log(fileContents);
  } catch (error: any) {
    console.error(`Error reading file: ${(error as Error).message}`);
  }
}

readAnyFile();
