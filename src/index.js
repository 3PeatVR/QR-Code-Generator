import React from "react";
import ReactDOM from "react-dom";
import { QRCode } from "react-qrcode-logo";
import { useState } from 'react';
import './style.css';

export default function QR() {
    
    const [text, setText] = useState('hello');
    function handleChange(e) {
        setText(e.target.value);
    }
    const [style, setStyle] = useState('squares');
    const [color, setColor] = useState('#000000');
    const [eyeColor, setEyeColor] = useState('#000000');
    return(
        <>
        <input id ="input" spellCheck="false" value={text} onChange={handleChange} />
        <div id="box"style={{background:'white'}}>
            <QRCode eclevel="H" size="320"   eyeColor={eyeColor} qrStyle={style} fgColor={color} value={text}/>
        </div>
        <div class="containerBoutons">
        <p class="para">Style:</p>
        <br />
        <div class="container">
        <button id="fluid" onClick={() => setStyle("fluid")}>Fluid</button>
        <button id="square" onClick={() => setStyle("square")}>Square</button>
        </div>
        <br />
        <p class="para">Color:</p>
        <br />
        <div class="container">
        <button id="black" onClick={() => setColor('#000000')}>BLACK</button>
        <button id="red" onClick={() => setColor('#fb2e01')}>RED</button>
        <button id="blue" onClick={() => setColor('#0e367c')}>BLUE</button>
        <button id="green" onClick ={() => setColor('#3c6c37')}>GREEN</button>
        </div>
        <br />
        <p class="para">Eye Color:</p>
        <br />
        <div class="container">
        <button id="black_eye" onClick={() => setEyeColor('#000000')}>BLACK</button>
        <button id="red_eye" onClick={() => setEyeColor('#fb2e01')}>RED</button>
        <button id="blue_eye" onClick={() => setEyeColor('#0e367c')}>BLUE</button>
        <button id="green_eye" onClick ={() => setColor('#3c6c37')}>GREEN</button>
        </div>
        </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QR/>);
