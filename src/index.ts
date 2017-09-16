class Foo {
    private result: number = 42;

    public func(this: Foo): number {
        return this.result;
    }
}

function action(): void {
    console.log("Hello world!");
}

function bar(callbackFn: (this: void) => any, thisArg?: undefined): any;
function bar<T>(callbackFn: (this: T) => any, thisArg: T): any;
function bar<T, TResult>(callbackFn: (this: T) => TResult, thisArg: T): TResult {
    return callbackFn.call(thisArg);
}

const foo = new Foo();

bar(action); // success
bar(foo.func); // ERROR: forgot to pass `thisArg`
bar(foo.func, foo); // success
