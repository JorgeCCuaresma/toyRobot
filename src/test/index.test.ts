import Robot from "..";

describe('robotPlay', () => {

    it('can place a robot on the board', () => {
        const robot = new Robot();
        robot.place(0, 0, 'NORTH');
        expect(robot.report()).toBe('0,0,NORTH');
    })

    it ('can not place a robot off the board', () => {
        const robot = new Robot();
        robot.place(5, 5, 'NORTH');
        expect(robot.report()).toBe('undefined,undefined,undefined');
    })

    it ('can move the robot', () => {
        const robot = new Robot();
        robot.place(0, 0, 'NORTH');
        robot.move();
        expect(robot.report()).toBe('0,1,NORTH');
    })

    it ('can rotate the robot left', () => {
        const robot = new Robot();
        robot.place(0, 0, 'NORTH');
        robot.left();
        expect(robot.report()).toBe('0,0,WEST');
        robot.left();
        expect(robot.report()).toBe('0,0,SOUTH');
        robot.left();
        expect(robot.report()).toBe('0,0,EAST');
        robot.left();
        expect(robot.report()).toBe('0,0,NORTH');
    })

    it ('can rotate the robot right', () => {
        const robot = new Robot();
        robot.place(0, 0, 'NORTH');
        robot.right();
        expect(robot.report()).toBe('0,0,EAST');
        robot.right();
        expect(robot.report()).toBe('0,0,SOUTH');
        robot.right();
        expect(robot.report()).toBe('0,0,WEST');
        robot.right();
        expect(robot.report()).toBe('0,0,NORTH');
    })

    it ('can report the position of the robot', () => {
        const robot = new Robot();
        robot.place(1, 2, 'NORTH');
        expect(robot.report()).toBe('1,2,NORTH');
    })

    it ('can not move the robot off the board', () => {
        const robot = new Robot();
        robot.place(4, 4, 'NORTH');
        robot.move();
        expect(robot.report()).toBe('4,4,NORTH');
        robot.place(0, 0, 'SOUTH');
        robot.move();
        expect(robot.report()).toBe('0,0,SOUTH');
        robot.place(0, 0, 'WEST');
        robot.move();
        expect(robot.report()).toBe('0,0,WEST');
        robot.place(4, 4, 'EAST');
        robot.move();
        expect(robot.report()).toBe('4,4,EAST');
    })


})