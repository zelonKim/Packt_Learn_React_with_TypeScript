export type User = {
    id: string;
    name: string;
}

export function authenticate(): Promise<User | undefined> {
    return new Promise((resolve) => 
        setTimeout( () => resolve({id: "1", name: "seongjin"}), 1000
    ))
}
// The function simulates successful authentication for a user called 'seongjin'
