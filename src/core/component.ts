export default class Component{
    constructor(protected Components: typeof Component[]){

    }
}

export function html($e){

}

class testComponent extends Component{
    private test(){}
}

html`<html></html>`;
let c = new Component([testComponent]);
