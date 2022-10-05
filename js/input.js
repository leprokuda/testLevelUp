const input = document.getElementById('only-num');

input.addEventListener('keydown', function(event) {

		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if (!(event.key > 48 || event.key < 57) && !(event.key > 96 || event.key < 105 ) && !(event.key == 'Delete' || event.key == 'Backspace' || event.key == 'Tab' || event.key == 'Esc')) {
			event.preventDefault();
		}
    console.log(event.key)
	});