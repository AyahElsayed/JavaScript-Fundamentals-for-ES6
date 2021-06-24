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


    it("can be built by implementing Symbol.iterator", function () {

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }
            *[Symbol.iterator]() {
                for (let e of this.employees) {
                    //console.log(e);
                    yield e;
                }
            }
        }

        let filter = function* (items, predicate) {
            for (let item of items) {
                //console.log("filter", item);
                if (predicate(item)) {
                    yield item;
                }
            }
        }

        let take = function* (items, number) {
            let count = 0;
            if (number < 1) return;
            for (let item of items) {
                //console.log("take", item);
                yield item;
                count += 1;
                if (count >= number) {
                    return;
                }
            }
        }

        let count = 0;
        let company = new Company();
        company.addEmployees("Tim", "Sue", "Joy", "Tom");

        for (let employee of take(filter(company, e => e[0] == 'T'), 2)) {
            count += 1;
        }

        expect(count).toBe(2);
    });
});