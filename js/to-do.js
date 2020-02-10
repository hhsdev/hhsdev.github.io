"use strict";

class ButtonAndTextarea {
  constructor() {
    this.create_elements();
    this.attach_handlers();
  }

  create_elements() {
    this.text = '## To-do list';
    this.listeners = [];

    this.button = $('<button>', { id: 'add-text-btn', class: 'add-text__btn' });
    this.button.append($('<i>', { class: 'far fa-edit'}));
    this.textarea = $('<textarea>', { id: 'add-text-textarea', class: 'add-text__textarea'}).val(this.text);
    this.save = $('<button>', { class: 'to-do__textarea-btn to-do__textarea-btn--save' }).text('save');
    this.close = $('<button>', { class: 'to-do__textarea-btn to-do__textarea-btn--close' }).text('close');
  }

  add_to(root) {
    root.append(this.button).append(this.textarea).append(this.save).append(this.close);
    this.textarea.css('display', 'none');
    this.close.css('display', 'none');
    this.save.css('display', 'none');
  }
  attach_handlers() {
    this.button.on('click', (event) => this.to_textarea(event));
    this.save.on('click', (event) => this.on_save(event));
    this.close.on('click', (event) => this.to_button(event));
  }

  to_textarea(event) {
    const { button, textarea, save, close } = this;
    button.css('animation', '0.4s to-textbox');
    $('i', button).css('animation', '0.4s rotate-out');
    button.one('animationend', () => {
      button.css('animation', '');
      $('i', button).css('animation', '');
      button.css('display', 'none');
      textarea.css('display', '');
      textarea.focus();
      save.slideDown();
      close.slideDown();
    })
  }

  to_button(event) {
    const { button, textarea } = this;
    textarea.css('animation', '0.4s to-button');
    $('.to-do__textarea-btn').slideUp();
    textarea.one('animationend', () => {
      textarea.css('animation', '');
      textarea.css('display', 'none');
      button.css('display', '');
      button.on('click', (event) => this.to_textarea(event));
    });
  }

  on_save() {
    this.text = this.textarea.val();
    this.emit_save_event();
    this.textarea.focus();
  }
  emit_save_event() {
    for (let listener of this.listeners) {
      listener.handle( { type: 'save', data: this.text });
    }
  }
}

class MarkdownConverter {
  constructor(target) {
    this.converter = new showdown.Converter();
    this.target = target;
  }

  handle(event) {
    if (event.type === 'save') {
      this.target.html(this.converter.makeHtml(event.data));
    }
  }
}
const init_to_do = ($root) => {
  const converter = new MarkdownConverter($('#text-area'));

  const todo_editor = new ButtonAndTextarea();
  todo_editor.add_to($root);
  todo_editor.listeners.push(converter);
  todo_editor.emit_save_event();
}
