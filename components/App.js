import {Form} from './Form/Form';
import {Messages} from './Messages/Messages';

export class App {
    constructor({el}) {
        this.el = el;
        this.render();
    }

    render() {
         this.el.innerHTML = `<div class="chat">
			<div class="chat-header">
				<h1>Чат</h1>
			</div>
        </div>`;
    }
}