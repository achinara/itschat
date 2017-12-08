import {Form} from './Form/Form.js';
import {Messages} from './Messages/Messages.js';

export class App {
    constructor({el}) {
        this.el = el;

        //Элемент chat, все будет делаться внутри него
        this.chat = document.createElement('div');
        this.chat.classList.add('chat');
        this.chat.innerHTML = `
			<div class="chat-header">
				<h1>Чат</h1>
			</div>`;

        this.el.append(this.chat);

         this.data = [
            {
                sender: 'Learn.javascript.ru',
                text: 'Эта часть позволит вам изучить JavaScript с нуля или упорядочить и дополнить существующие знания',
                time: this.getTime()
            },
            {
                sender: 'Студент',
                text: 'Окайййй!',
                time: this.getTime()
            }
        ];

        this.form = new Form({
            el: document.createElement('form'),
            onSubmit: this._onSubmit.bind(this),
            getTime: this.getTime.bind(this)
        });

        this.messages = new Messages({
            el: document.createElement('div'),
            data: this.data
        });

        this.chat.append(this.messages.el, this.form.el);

        this.render();
    }

    formatTime(val) {
        return val < 10 ? '0' + val : val;
    }

    getTime() {
        const date = new Date();
        const hour = date.toLocaleString('ru-RU', {
            hour: '2-digit',
            timeZone: 'Europe/Moscow'
        });
        return `${this.formatTime(hour)}:${this.formatTime(date.getMinutes())}`;
    }

    _onSubmit(data) {
        this.data.push(data);
        this.messages.renderOneMsg(data);
    }

    render() {
        this.messages.render();
        this.form.render();
    }
}