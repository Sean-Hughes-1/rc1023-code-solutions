import { promises as fsPromises } from 'node:fs';

async function catFiles(filePaths: string[]): Promise<void> {
  try {
    const fileContentsPromises = filePaths.map((filePath) =>
      fsPromises.readFile(filePath, 'utf-8')
    );
    const fileContents = await Promise.all(fileContentsPromises);
    console.log(fileContents.join(''));
  } catch (error: any) {
    console.error(`Error reading file: ${(error as Error).message}`);
  }
}
const [, , ...filePaths] = process.argv;
catFiles(filePaths);
