export class Form {
    constructor({el, onSubmit}) {
        this.el = el;
        this.el.classList.add('chat-form');
        this.render();

        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.onSubmit = onSubmit;
    }

    timeFormat(val){
        return val < 10 ? '0' + val : val;
    }

    //Форматирование времени
    getTime() {
        const date= new Date();
        const hour = date.toLocaleString('ru-RU', {
            hour: '2-digit',
            timeZone: 'Europe/Moscow'
        });
        return `${this.timeFormat(hour)} 
                : ${this.timeFormat(date.getMinutes())} 
                : ${this.timeFormat(date.getSeconds())}` ;
    }

    _onSubmit(e) {
        e.preventDefault();
        const textarea = e.target.querySelector('textarea');

        this.onSubmit(
            {
                sender: 'You',
                text: textarea.value,
                timestamp: this.getTime()
            }
        )
    }

    render() {
        this.el.innerHTML = `
            <textarea rows="3" placeholder="Type your message"></textarea>
            <input type="submit" value="Send">
        `;
    }
}