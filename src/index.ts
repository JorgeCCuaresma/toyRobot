type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

const directions  = ['NORTH', 'SOUTH', 'EAST', 'WEST'];


class Robot {

    private x: number;
    private y: number;
    private direction: Direction;


    place(newX: number, newY: number, newDirection: Direction) {
        if (!this.validatePosition(newX, newY) || !directions.includes(newDirection)) {
           return;
        }

        this.x = newX;
        this.y = newY;
        this.direction = newDirection;
    }

    validatePosition(x: number, y: number) {
        return x >= 0 && x <= 4 && y >= 0 && y <= 4;
    }

    move() {
        if (this.canMove()) {

            let newX = this.x;
            let newY = this.y;

            if (this.direction === 'NORTH') {
                newY = this.y + 1;
            }
            else if (this.direction === 'SOUTH') {
                newY = this.y - 1;
            }
            else if (this.direction === 'EAST') {
                newX = this.x + 1;
            }
            else if (this.direction === 'WEST') {
                newX = this.x - 1;
            }

            if (!this.validatePosition(newX, newY)) {
               return
            }

            this.x = newX;
            this.y = newY;
        }
    }

    left() {
        if (this.canMove()) {

            if (this.direction === 'NORTH') {
                this.direction = 'WEST';
            }
            else if (this.direction === 'SOUTH') {
                this.direction = 'EAST';
            }
            else if (this.direction === 'EAST') {
                this.direction = 'NORTH';
            }
            else if (this.direction === 'WEST') {
                this.direction = 'SOUTH';
            }
        }
    }

    right() {
        if (this.canMove()) {

            if (this.direction === 'NORTH') {
                this.direction = 'EAST';
            }
            else if (this.direction === 'SOUTH') {
                this.direction = 'WEST';
            }
            else if (this.direction === 'EAST') {
                this.direction = 'SOUTH';
            }
            else if (this.direction === 'WEST') {
                this.direction = 'NORTH';
            }
        }
    }

    report() {
        return `${this.x},${this.y},${this.direction}`
    }

    canMove() {
        return this.x !== undefined && this.y !== undefined && this.direction !== undefined
    }

}

export default Robot