class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.last;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.last = Math.round( (this.max + this.min) / 2);
        return this.last;
    }

    lower() {
        this.max = this.last;
    }

    greater() {
        this.min = this.last;
    }
}

module.exports = GuessingGame;
