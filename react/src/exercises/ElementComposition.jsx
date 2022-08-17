import React from "react";

export function ElementComposition() {
    return (
        <div>
            <h3>ElementComposition</h3>

            <div className="divider"></div>
            
            <ElementWithChildSlot>
                <h3>Hello World!</h3>
                <button>Boop</button>
            </ElementWithChildSlot>

            <div className="divider"></div>

            <ElementWithNamedParts
                top={<p><b>I'm at the top!</b></p>}
                bottom={<p><b>I'm at the bottom!</b></p>}
            />
        </div>
    );
}

export function ElementWithChildSlot(props) {

    return (
        <div>
            <p>The content inserted will appear between this line</p>
            {props.children}
            <p>and this line</p>
        </div>
    )
}

export function ElementWithNamedParts(props) {

    return (
        <div>
            {props.top}
            <p>This content will be between two child element parts</p>
            {props.bottom}
        </div>
    )
}
