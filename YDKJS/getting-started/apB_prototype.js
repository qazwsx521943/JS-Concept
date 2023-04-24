function randMax(max) {
    return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
    symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
    spin() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(this.symbols.length - 1);
        }
        return this.symbols[this.position];
    },
};

var slotMachine = {
    reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
    spin() {
        this.reels.forEach(function spinReel(reel) {
            reel.spin();
        });
    },
    display() {
        // TODO
        let line = [];
        for (let i = 0; i <= 2; i++) {
            this.spin();
            line.push(this.reels.map((reel) => reel.display()));
        }
        console.log(line.map((i) => i.join("|")).join("\n"));
    },
};
// slotMachine.reels[0].spin();
// console.log(slotMachine.reels[0].display());
slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
