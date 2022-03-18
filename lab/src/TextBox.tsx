import React, {Dispatch, SetStateAction} from 'react';

function TextBox(prop: { label: string; change: Dispatch<SetStateAction<string>>}) {
    const handler = (event : {target : HTMLInputElement}) => {
        prop.change(event.target.value)
    }
    return (
        <div className="TextBox">
            <header className="Label and Input">
                <label>{prop.label}</label>
                <input type="text" onChange={handler}/>
            </header>
        </div>
    );
}

export default TextBox;
