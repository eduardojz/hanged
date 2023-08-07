//elements that i will probably need
const elements=["div","button","input","form"]
class createElements{
    constructor({tagName="", attributes={}, events={},children=[],inputType=""}){
        if (!elements.includes(tagName)) {
            throw Error ("invalid Tag")
        }
        this.tagName=tagName;
        this.attributes=attributes;
        this.events=events;
        this.children=children;
        this.inputType=inputType;
    }
}
//