import { promises as fsPromises } from 'node:fs';
async function readDijkstraFile(): Promise<void> {
  try {
    const filePath = 'dijkstra.txt';
    const fileContents = await fsPromises.readFile(filePath, 'utf-8');
    console.log(fileContents);
  } catch (error: any) {
    console.error(`Error reading file: ${(error as Error).message}`);
  }
}
readDijkstraFile();
