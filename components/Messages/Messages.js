export class Messages {
    constructor({el, data}) {
        this.el = el;
        this.el.classList.add('chat-history');
        this.ul = document.createElement('ul');
        this.ul.classList.add('messages');

        this.el.append(this.ul);
        this.data = data;
    }

    getItems(items) {
        return items.map(item => {
            return this.getItem(true, item.sender, item.time, item.text)
        }).join('');
    }

    getItem(isString, name, time, text) {
        const cls = name == 'Me' ? 'item __my' : 'item __other';
        const imgName = name == 'Me' ? 'eve' : 'lena';

        if (isString) {
            return `<li class="${cls}">${this.getTemplateInnerItem(name, imgName, text, time)}</li>`;
        } else {
            const li = document.createElement('li');
            li.className = cls;
            li.innerHTML = this.getTemplateInnerItem(name, imgName, text, time);
            return li;
        }
    }

    getTemplateInnerItem(name, imgName, text, time) {
        return `
             <img src="https://semantic-ui.com/images/avatar2/small/${imgName}.png" alt="" />
                <div class="message">
                    <span class="message__user-name">${name}</span>
                    <time class="message__time">
                        <i class="fa fa-clock-o"></i>
                        ${time}
                    </time>
                    <p class="message__text">${text}</p>
                </div>`;
    }

    renderOneMsg({sender:name, time, text}) {
         this.ul.append(this.getItem(false, name, time, text));
    }

    render() {
        this.ul.innerHTML = this.getItems(this.data);
    }
}