const converter = new showdown.Converter();
let to_do_list = '## To-do List'

const add_to_list = () => {
  $('#text-area').html(converter.makeHtml(to_do_list))
}

let button = $('#add-text')
let textarea = $('<textarea>', {id: 'add-text-textarea', class: 'to-do__textarea'})
textarea.val(to_do_list)
const to_textarea = () => {
  button.css('animation', '0.4s to-textbox')
  $('i', button).css('animation', '0.4s rotate-out')
  button.one('animationend', function() {
    button.css('animation', '')
    $('i', button).css('animation', '')
    button.replaceWith(textarea)
    spawn_textarea_buttons()
    textarea.focus()
  })
}
button.on('click', to_textarea)

const spawn_textarea_buttons = () => {
  const save = $('<button>', { class: 'to-do__textarea-btn to-do__textarea-btn--save' })
  const close = $('<button>', { class: 'to-do__textarea-btn to-do__textarea-btn--close' })

  save.on('click', on_save)
  close.on('click', on_close)

  close.text('close').hide().insertAfter(textarea).slideDown()
  save.text('save').hide().insertAfter(textarea).slideDown()
}

const animate_button_transition = () => {
  textarea.css('animation', '0.4s to-button')
  $('.to-do__textarea-btn').slideUp()
  textarea.one('animationend', function(event) {
    textarea.css('animation', '')
    textarea = textarea.replaceWith(button)
    button.on('click', to_textarea)
  })
}

const on_save = (event) => {
  to_do_list = textarea.val()
  add_to_list()
  textarea.focus()
}

const on_close = (event) => {
  animate_button_transition()
}

add_to_list()