import { writeFileSync, readFileSync } from 'fs';

let resizable = readFileSync('lib/fsm-grid.component.ts').toString();
writeFileSync('lib/fsm-grid.component.ts.bak', resizable);

const styles = readFileSync('lib/fsm-grid.component.css');
resizable = resizable.replace(/styleUrls:\s*\[.*fsm-grid.component.css.*\]/, `styles: [\`${styles}\`]`);

const template = readFileSync('lib/fsm-grid.component.html');
resizable = resizable.replace(/templateUrl:\s*.fsm-grid.component.html[^,]*/, `template: \`${template}\``);

writeFileSync('lib/fsm-grid.component.ts', resizable);
