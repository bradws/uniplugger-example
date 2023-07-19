import { IDatalayer } from '../shared/iDatalayer';

// A plugin
export default class MySqlDatalayer implements IDatalayer {
    public name: string = 'MySql';
    public getEmployeeDetails(iemployeeId: string): string[] {
        let employeeData: Array<string> = new Array<string>();

        // Write code specific to getting data from a MySql database
        // ...
        // employeeData = ???

        return employeeData;
    }
}
