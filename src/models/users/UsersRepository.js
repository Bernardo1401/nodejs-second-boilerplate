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
    getById(id) {
        return this.users.find(user => user.id === id);
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
