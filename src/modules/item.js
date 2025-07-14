export default class Item {
    constructor(name, status, rating, hours,) {
        this.name = name;
        this.status = status;
        this.rating = rating;
        this.hours = hours;
        

        // non-enumerable ID property
        Object.defineProperty(this, 'id', {
            value: undefined,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }

    // Getters
    getName() { return this.name; }
    getStatus() { return this.status; }
    getRating() { return this.rating; }
    getHours() { return this.hours; }
    getID() { return this.id; }

    // Setters
    setName(name) { this.name = name }
    setStatus(status) { this.status = status }
    setRating(rating) { this.rating = rating}
    setHours(hours) { this.hours = hours }
    setID(id) { this.id = id }

    // Methods
    info() {
        return `Name: ${this.name}. Status: ${this.status}. Rating: ${this.rating}. Hours: ${this.hours}.`
    }
}