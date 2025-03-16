import getHealth from '../health';

describe('Testing the getHealth function', () => {
    test.each([
        [{ health: 90 }, 'healthy'],
        [{ health: 45 }, 'wounded'],
        [{ health: 10 }, 'critical'],
        [{ health: -10 }, new Error('The object value is a negative number')],
        [{ health: 'abc' }, new Error('The value of the object is not a number')],
    ])('the value of health in an object %s with an indication %j', (objHealth, indication) => {
        if (indication instanceof Error) {
            expect(() => getHealth(objHealth)).toThrow(indication);
        } else {
            expect(getHealth(objHealth)).toBe(indication);
        }
    });
});