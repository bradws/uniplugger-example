import { IDatalayer } from '../shared/iDatalayer';

// A plugin
export default class DiskDatalayer implements IDatalayer {
    public name: string = 'Disk';
    public getEmployeeDetails(iemployeeId: string): string[] {
        let employeeData: Array<string> = new Array<string>();

        // Write code specific to getting data from the disk
        // ...
        // employeeData = ???

        return employeeData;
    }
}
