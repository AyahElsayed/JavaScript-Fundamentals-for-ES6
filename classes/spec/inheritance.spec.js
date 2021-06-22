
describe("the class keyword", function () {

    it("can inheritance", function () {
        class Person {
            constructor(name) {
                this.name = name;
            }
            set name(name) {
                if (name !== undefined) {
                    this._name = name;
                }
            }
            get name() {
                return this._name;
            }
        }
        class Employee extends Person {
            doWork() {
                return `${this._name} is working`;
            }

        }
        let e1 = new Person("Alex");
        let e2 = new Employee("Aya");
        
        expect(e1.name).toBe("Alex");
        expect(e2.name).toBe("Aya");

        expect(e2.doWork()).toBe("Aya is working")
    });
});