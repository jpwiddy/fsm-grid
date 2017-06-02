import { writeFileSync, readFileSync } from 'fs';

let file = readFileSync('lib/fsm-grid.component.ts').toString();
writeFileSync('lib/fsm-grid.component.ts.bak', file);

const styles = readFileSync('lib/fsm-grid.component.css');
file = file.replace(/styleUrls:\s*\[.*fsm-grid.component.css.*\]/, `styles: [\`${styles}\`]`);

const template = readFileSync('lib/fsm-grid.component.html');
file = file.replace(/templateUrl:\s*.fsm-grid.component.html[^,]*/, `template: \`${template}\``);

writeFileSync('lib/fsm-grid.component.ts', file);
