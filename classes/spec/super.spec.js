
describe("the class keyword", function () {

    it("can invoke super methods", function () {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }

        class Employee extends Person {

            constructor(title, name) {
                super(name);
                this._title = title;
            }

            get title() {
                return this._title;
            }

            doWork() {
                return `${this._name} is working`;
            }

        }

        let e1 = new Employee("Developer", "Scott");
        expect(e1.name).toBe("Scott");
        expect(e1.title).toBe("Developer");

    });

});