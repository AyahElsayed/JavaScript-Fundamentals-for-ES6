describe("the class keyword", function () {

    it("can have a constructor", function () {

        class Employee {

            constructor(name) {
                this._name = name;
            }

            doWork() {
                return "complete!";
            }

            getName() {
                return this._name;
            }
        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        expect(e1.getName()).toBe("Scott");
        expect(e2.getName()).toBe("Alex");

    });
});