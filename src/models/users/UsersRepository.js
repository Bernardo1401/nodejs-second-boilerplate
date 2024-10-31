import User from "./User.js";

class UsersRepository {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return this.users;
    }
    addUser(name, email, password) {
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return newUser;
    }
    getUserById(id) {
        const user = this.users.find((u) => u.id == id);
        if (!user) {
            return null;
        } 
            return user;
    }
    update(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        this.users[index] = user;
    }
    delete(id) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1); 
        return true;
    }    
}

export default UsersRepository;
