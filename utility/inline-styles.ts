import { writeFileSync, readFileSync } from 'fs';

let resizable = readFileSync('lib/fsm-grid.component.ts').toString();
writeFileSync('lib/fsm-grid.component.ts.bak', resizable);

const styles = readFileSync('lib/fsm-grid.component.css');
resizable = resizable.replace(/styleUrls:\s*\[.*?\]/, `styles: [\`${styles}\`]`);

writeFileSync('lib/fsm-grid.component.ts', resizable);
