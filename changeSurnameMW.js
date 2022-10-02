//Перевод фамилии в Дательный падеж

objBGName11.onblur = changeSurnameMW.bind(this, 0);
objM.onclick = changeSurnameMW.bind(this, 1);
objW.onclick = changeSurnameMW.bind(this, 2);

function changeSurnameMW(noButMW) {
    //Нет фамилии
    if (objBGName11.value == "") { return; }
    //Событие не с кнопок MW
    if (noButMW == 0) {
        //Нет имени
        if (objBGName12.value == "") { return; }
        //Данные по полу из массива имен
        else { typeName = names1Array[`${objBGName12.value}`][1]; }
    }
    
    if (noButMW == 1) { typeName = "m"; }
    if (noButMW == 2) { typeName = "w"; }

    //Мужские данные
    if (typeName == "m") {
        let lastSymb = objBGName11.value.slice(-1);
        let new_lastSymb = "";//Последний символ/символы
        let new_last3Symb = "";//Последни три символа
        let changeSymbols = 0;

        switch (lastSymb) {
            case 'а'://чайкА-чайкИ
                new_lastSymb = 'и';
                changeSymbols = 1;
                objBGName21.style.background = "#e2e48a";
                break;
            case 'е'://
                new_lastSymb = 'ы';
                changeSymbols = 1;
                objBGName21.style.background = "#e2e48a";
                break;
            case '0'://
                new_lastSymb = '0';
                changeSymbols = 1;
                objBGName21.style.background = "#e2e48a";
                break;
            case 'у'://ивановУ-ивановА
                new_last3Symb = objBGName11.value.slice(-3);
                switch (new_last3Symb) {
                    case 'ому':
                        new_lastSymb = 'ого';
                        changeSymbols = 3;
                        objBGName21.style.background = "#b7b8a6";//зеленый 
                        break;
                    default:
                        new_lastSymb = 'а';
                        objBGName21.style.background = "#e2e48a";//Желтый
                        changeSymbols = 1;
                        break;
                }
                break;
            case 'ю'://медведЮ-медведЯ
                new_lastSymb = 'я';
                changeSymbols = 1;
                objBGName21.style.background = "#e2e48a";
                break;
            default:
                new_lastSymb = "";
                objBGName21.style.background = "#e65454";//Красный
                changeSymbols = 0;
                break;
        }

        //Если поле первой Фамилии непустое
        if (objBGName11.value.length > 0) { objBGName21.value = objBGName11.value.slice(0, objBGName11.value.length - changeSymbols) + new_lastSymb; }
        //Исключения:
        if (objBGName11.value.slice(-3) == "дзе") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
        if (objBGName11.value.slice(-2) == "ых") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
        if (objBGName11.value.slice(-2) == "их") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
        if (objBGName11.value.slice(-2) == "иа") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
        if (objBGName11.value.slice(-2) == "гу") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
        if (objBGName11.value.slice(-4) == "вили") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }
    }
    //Женские данные
    if (typeName == "w") { objBGName21.value = objBGName11.value; objBGName21.style.background = "#b7b8a6"; }

}

