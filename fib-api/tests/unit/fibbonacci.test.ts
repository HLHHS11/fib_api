import { fibonacci } from '../../src/fibonacci';
import { expect, describe, it } from '@jest/globals';

describe('fibonacci test', function () {
    it('correctly calculates small fibonacci numbers', () => {
        expect(fibonacci(1)).toBe(1n);
        expect(fibonacci(2)).toBe(1n);
        expect(fibonacci(3)).toBe(2n);
        expect(fibonacci(4)).toBe(3n);
        expect(fibonacci(5)).toBe(5n);
        expect(fibonacci(6)).toBe(8n);
        expect(fibonacci(7)).toBe(13n);
        expect(fibonacci(8)).toBe(21n);
        expect(fibonacci(9)).toBe(34n);
        expect(fibonacci(10)).toBe(55n);
        expect(fibonacci(11)).toBe(89n);
        expect(fibonacci(12)).toBe(144n);
        expect(fibonacci(13)).toBe(233n);
        expect(fibonacci(14)).toBe(377n);
        expect(fibonacci(15)).toBe(610n);
        expect(fibonacci(16)).toBe(987n);
        expect(fibonacci(17)).toBe(1597n);
    });

    it('handles large fibonacci numbers', () => {
        expect(fibonacci(50)).toBe(12586269025n);
        expect(fibonacci(100)).toBe(354224848179261915075n);
        expect(fibonacci(1000)).toBe(
            43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n,
        );
    });
});
