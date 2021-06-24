describe("generators", function () {

    it("can build an iterable", function () {

        let numbers = function* (start, end) {
            for (let i = start; i <= end; i++) {
                yield i;
                /*
                yield 1;
                yield 2;
                yield 3;
                yield 4;
                yield 5;
                 */
            }
        };

        let sum = 0;
        for (let n of numbers(1, 5)) {
            sum += n;
        }

        expect(sum).toBe(15);
    });
});