const template = document.createElement("template");
let clockContent = ``;

function GetTime(){
    let now = new Date();
    
    let Hours = now.getHours();
    let Minutes = now.getMinutes();
    let Seconds = now.getSeconds();
    
    Hours = (Hours < 10) ? '0' + Hours : Hours;
    Minutes = (Minutes < 10) ? '0' + Minutes : Minutes;
    Seconds = (Seconds < 10) ? '0' + Seconds : Seconds;

    clockContent = `${Hours}:${Minutes}:${Seconds}`;

    setTimeout(GetTime, 1000);
}

template.innerHTML = `
    <style>    
        #clock-container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-70px);
            transition: all ease-out .2s;
            font-size: 70px;
            font-family: sans-serif;
        }
    </style>

    <div id="clock-container">
        ${clockContent}
    </div>
`;

class DigitalClock extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.append(template.content.cloneNode(true));
    }

    connectedCallback(){
        GetTime();
    }
}

customElements.define("digital-clock", DigitalClock);