type UserRole = "guest" | "member" | "admin"

type User = {
    id: number
    username: string
    role: UserRole
}

const users: User[] = [
    { id: 1, username: "john_doe", role: "member"},
    { id: 2, username: "jane", role: "admin"},
    { id: 3, username: "guest_user", role: "guest"},
]

function updateUser(id: number, updates: any){
    const foundUser = users.find(user=> user.id === id);
    if (!foundUser){
        console.error("User not found")
        return
    }

    Object.assign(foundUser, updates);
}

function fetchUserDetails(username:string):User {
    const user = users.find(user=> user.username === username)
    if (!user){
        throw new Error(`User with username ${username} not found`)
    }
    return user;
}

console.log(users)