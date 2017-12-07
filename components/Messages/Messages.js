export class Messages {
    constructor({el, data}) {
        this.el = el;
        this.el.classList.add('chat-history');
        this.ul = document.createElement('ul');
        this.ul.classList.add('messages');

        this.el.append(this.ul);
        this.data = data;
        this.render();
    }

    renderItems(items) {
        return items.map(item => {
            return this.getTemplateItem(item.sender, item.timestamp, item.text)
        }).join('');
    }

    getTemplateItem(name, time, text) {
        return `
            <li class="item __other">
                <img src="https://semantic-ui.com/images/avatar2/small/lena.png" alt="" />
                <div class="message">
                    <span class="message__user-name">${name}</span>
                    <time class="message__time">
                        <i class="fa fa-clock-o"></i>
                        ${time}
                    </time>
                    <p class="message__text">${text}</p>
                </div>
            </li>`;
    }

    render() {
        this.ul.innerHTML = this.renderItems(this.data);
    }
}