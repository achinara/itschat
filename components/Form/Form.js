export class Form {
    constructor({el, onSubmit, getTime}) {
        this.el = el;
        this.el.classList.add('chat-form');

        this.onSubmit = onSubmit;
        this.getTime = getTime;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.el.addEventListener('keydown', this.handlerKeyDown.bind(this));
    }

    _onSubmit(e) {
        e.preventDefault();
        const textarea = this.el.querySelector('textarea');
        const value = textarea.value;

        if (!value) return;
        textarea.value = '';

        this.onSubmit(
            {
                sender: 'Me',
                text: value,
                time: this.getTime()
            }
        )
    }

    handlerKeyDown(e) {
        const keyCode = e.keyCode;
        const enterCode = 13;

        if (keyCode == enterCode) {
            this._onSubmit(e);
        }
    }

    render() {
        this.el.innerHTML = `
            <textarea rows="3" placeholder="Type your message"></textarea>
            <input type="submit" value="Send">
        `;
    }
}