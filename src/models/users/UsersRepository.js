class UsersRepository {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return this.users;
    }
    getById(id) {
        return this.users.find(user => user.id === id);
    }
    add(user) {
        this.users.push(user);
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
