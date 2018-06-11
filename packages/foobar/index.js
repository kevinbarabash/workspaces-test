import * as React from "react";

import Foo from "@kevinbarabash/foo";
import Bar from "@kevinbarabash/foo";

export default class FooBar extends React.Component {
    render() {
        return <div>
            <Foo/>
            <Bar/>
        </div>;
    }
}
console.log(Foo.foo);