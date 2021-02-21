import fs from 'fs';

export default async function getCurrentKey() {
  const file =
    process.platform === 'darwin'
      ? '/Users/mikedettmer/butt.txt'
      : '/home/mike/butt.txt';
  const buttTxt = fs.readFileSync(file, 'utf8');
  return buttTxt.trim();
}
