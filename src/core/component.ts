export default class Component {
    protected baseElement: HTMLElement;
    constructor(protected Components: Component[]) {
        this.createElement();
    }

    @StateChangeObserverer()
    public state: any = {};
    protected createElement() {
        console.log('Default');
    }
    public appendComponentToHTMLElement(HTMLElement: HTMLElement) {
        HTMLElement.appendChild(this.baseElement);
    }
}

export function html(html: TemplateStringsArray, ...args: any[]): Component[] {
    /**
     * First, we try to convert the template string into a simple html string.
     * By this way, we are able to parse the HTML code and build a list of components.
     */
    let html_real_code = '';
    html.forEach((e, i) => {
        html_real_code += e;
        if (args[i]) html_real_code += `{{extjs_2_${i}}}`;
    });

    /**
     * Here comes the parsing task. We try to build a virtual DOM from html string
     */
    let virtual_html_representation: VDomElement[] = [];
    const baseVDomElement: VDomElement = {
        tagName: undefined,
        props: [],
        text: ''
    };
    let currentElement: VDomElement = undefined;
    let buffer = '';
    for (let i = 0; i < html_real_code.length; i++) {
        const char = html_real_code[i];

        if (currentElement) {
            if (currentElement.tagName) {
                if (char == '>') {
                    virtual_html_representation.push(currentElement);
                    console.log(buffer);
                    buffer = '';
                    currentElement = undefined;
                } else buffer += char;
            } else {
                if (char == ' ') {
                    //console.log(buffer);
                    currentElement.tagName = buffer;
                    buffer = '';
                } else {
                    buffer += char;
                }
            }
        } else {
            if (char == '<') {
                virtual_html_representation.push({
                    tagName: 'span',
                    props: {},
                    text: buffer
                });
                buffer = '';
                currentElement = baseVDomElement;
            } else {
                buffer += char;
            }
        }
    }
    console.log(virtual_html_representation);
    console.log(html_real_code);
    return [];
}

export class ExtJsDefaultComponent extends Component {
    protected createElement() {
        this.baseElement = document.createElement('div');
    }
}

function StateChangeObserverer() {
    return function(target: any, key: string | symbol) {
        let value = target[key];
        const get = () => {
            return value;
        };
        const set = (next: any) => {
            console.log('Target element state has changed.', target);
            value = next;
        };
        Object.defineProperty(target, key, {
            get,
            set,
            enumerable: true,
            configurable: true
        });
    };
}

interface VDomElement {
    tagName: string;
    props: any;
    text: string;
}
