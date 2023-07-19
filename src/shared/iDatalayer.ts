// The contract
export interface IDatalayer {
    name: string;
    getEmployeeDetails(iemployeeId: string): Array<string>
}
