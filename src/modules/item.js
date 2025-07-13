export default class Item {
    constructor(name, status, rating, hours,) {
        this.name = name;
        this.status = status;
        this.rating = rating;
        this.hours = hours;
        this.id = crypto.randomUUID();
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

    // Methods
    info() {
        return `Name: ${this.name}. Status: ${this.status}. Rating: ${this.rating}. Hours: ${this.hours}.`
    }
}