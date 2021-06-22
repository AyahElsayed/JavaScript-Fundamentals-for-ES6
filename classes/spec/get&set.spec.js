describe("the class keyword", function () {

    it("can have getters and setters", function () {

        class Employee {

            constructor(name) {
                this.name = name;
            }

            doWork() {
                return "complete!";
            }

            // get => reading data
            get name() {
                return this._name.toUpperCase();
            }

            // set => writing data
            set name(newValue) {
                this._name = newValue;
            }
        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        expect(e1.name).toBe("SCOTT");
        expect(e2.name).toBe("ALEX");

        e1.name = "Chris";
        expect(e1.name).toBe("CHRIS");

    });
});