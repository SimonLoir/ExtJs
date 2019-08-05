import Component from "./component";

export default function render(
    baseElement: HTMLElement,
    baseComponent: Component
) {
    baseComponent.appendComponentToHTMLElement(baseElement);
}
