export class Project{
    projectname: string;
    supporthours: number[];
    usages: number[];
    users: {[key: number]: string[]};
}
