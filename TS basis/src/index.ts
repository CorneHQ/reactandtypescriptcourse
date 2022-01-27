interface User {
    name: string,
    age: number,
    isAdult: boolean
    hasCar?: boolean
}

interface Student extends User {
    studentNumber: number,
    class: string
}

const yannick: Student = {
    name: "Yannick",
    age: 19,
    isAdult: true,
    studentNumber: 6666666,
    class: "2C"
}

interface Alien {
    name: string,
    planet: string
}

const object: Alien | User = {
    name: "Yavuz",
    planet: "Mars"
}

const objectTwo: Alien & User = {
    name: "Yannick",
    age: 19,
    isAdult: true,
    planet: "Venus"
}

function sayName(user: User): string {
    return user.name;
}

sayName(yannick)

function sayAge(user: Pick<User, "age">): number {
    return user.age;
}

sayAge({ age: 17 })

function sayIsAdult(user: Partial<Omit<User, "name" | "age" | "hasCar">>): boolean {
    if(user.isAdult !== undefined) {
        return user.isAdult
    }
    return false;
} 

sayIsAdult()