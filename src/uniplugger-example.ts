import { Uniplugger } from "uniplugger";
import { IDatalayer } from "./shared/iDatalayer";

// The main application
async function main() {

    // Instantiate Uniplugger by passing in the interface and the plugin folder
    const uniplugger = new Uniplugger<IDatalayer>('./plugins');

    console.log(`Your plugin folder is ${uniplugger.folder}`);
    
    // Discover the plugins. Note it returns a Promise, so you'll have to await it.
    await uniplugger.discover();
    console.log(`Number of plugins discovered = ${uniplugger.plugins.length}`);    

    // You're done! Now, simply use the plugins    
    console.log(`uniplugger.plugins[0].name = ${uniplugger.plugins[0].name}`);
    const data1 = uniplugger.plugins[0].getEmployeeDetails('1');

    console.log(`uniplugger.plugins[1].name: ${uniplugger.plugins[1].name}`);   
    const data2 = uniplugger.plugins[1].getEmployeeDetails('1');
 
}

main();
