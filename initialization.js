// ORDERS.HTML
// Объявляем объекты Страницы Orders.html
let objRegion = document.getElementById('idRegion');

let obNUMSLabel = document.getElementById('idNUMSLabel');
let objNUMS = document.getElementById('idNUMS');

let objJudOnBoard = document.getElementById('idJudOnBoard');
let objJudFIO = document.getElementById('idJudFIO');
let objNumSUio = document.getElementById('idNumSUio');
let objidNumSUioLBL = document.getElementById('idNumSUioLBL');
let objidJudFIOio = document.getElementById('idJudFIOio');
let objidJudFIOioLBL = document.getElementById('idJudFIOioLBL');

let objSPprint = document.getElementById('idSPprint');
let objSUPomLabel = document.getElementById('idSUPomLabel');
let objSUPomList = document.getElementById('idSUPomList');
let objSUPomListLIST = document.getElementById('idSUPomListLIST');
let objSPomDoljLabel = document.getElementById('idSPomDoljLabel');
let objSPomDolj = document.getElementById('idSPomDolj');

let objDataOrder = document.getElementById('idDataOrder');
let objUID1 = document.getElementById('idUID1');
let objUID2 = document.getElementById('idUID2');
let objUID3 = document.getElementById('idUID3');
let objUID4 = document.getElementById('idUID4');
let objSOno1 = document.getElementById('idSOno1');
let objSOno2 = document.getElementById('idSOno2');
let objSOno3 = document.getElementById('idSOno3');
let objMFNS_No = document.getElementById('idMFNS_No');
let objMFNSGP_No = document.getElementById('idMFNSGP_No');
let objMFNS_OKTMO_GP = document.getElementById('idMFNS_OKTMO_GP');
let objMFNS_OKTMO_GP_DL = document.getElementById('idMFNS_OKTMO_GP_DL');

let objBGName11 = document.getElementById('idBGName11');
let objBGName12 = document.getElementById('idBGName12');
let objBGName12DL = document.getElementById('idBGName12DL');
let objBGName13 = document.getElementById('idBGName13');
let objBGName13DL = document.getElementById('idBGName13DL');
let objM = document.getElementById('idM');
let objW = document.getElementById('idW');
let objMW = document.getElementById('idMW');
let objBGName21 = document.getElementById('idBGName21');
let objBGName22 = document.getElementById('idBGName22');
let objBGName23 = document.getElementById('idBGName23');

let objCBBGIndex = document.getElementById('idCBBGIndex');
let objCBKorpStop = document.getElementById('idCBKorpStop');
let objCBLiterStop = document.getElementById('idCBLiterStop');
let objBGIndex = document.getElementById('idBGIndex');
let objBGCity = document.getElementById('idBGCity');
let objBGStreet = document.getElementById('idBGStreet');
let objlistStreetBG = document.getElementById('idlistStreetBG');
let objBGHouse = document.getElementById('idBGHouse');
let objBGKorp = document.getElementById('idBGKorp');
let objBGLiter = document.getElementById('idBGLiter');
let objBGRoom = document.getElementById('idBGRoom');

let objBGINN = document.getElementById('idBGINN');
let objBGDataBorn = document.getElementById('idBGDataBorn');
let objBGBornPlace = document.getElementById('idBGBornPlace');

let objTR18 = document.getElementById('idTR18');
let objCB18 = document.getElementById('idCB18');
let obj18Name1 = document.getElementById('id18Name1');
let obj18Name2 = document.getElementById('id18Name2');
let obj18Name3 = document.getElementById('id18Name3');
let obj18BornData = document.getElementById('id18BornData');
let obj18BornPlace = document.getElementById('id18BornPlace');
let obj18INN = document.getElementById('id18INN');

let objCBPenyPer = document.getElementById('idCBPenyPer');
let objTaxType = document.getElementById('idTaxType');
let objTTStart = document.getElementById('idTTStart');
let objTTEnd = document.getElementById('idTTEnd');
let objTTR = document.getElementById('idTTR');
let objTTK = document.getElementById('idTTK');
let objPNStart = document.getElementById('idPNStart');
let objPNEnd = document.getElementById('idPNEnd');
let objPNR = document.getElementById('idPNR');
let objPNK = document.getElementById('idPNK');
let objOKTMO_TT = document.getElementById('idOKTMO_TT');
let objOKTMO_TTList = document.getElementById('idOKTMO_TTList');
let objKBKTT = document.getElementById('idKBKTT');
let objKBKPN = document.getElementById('idKBKPN');

let objBUTTT_PN_add = document.getElementById('idBUTTT_PN_add');
let objselStrokaEdit = document.getElementById('idselStrokaEdit');
let objidBUTStrokaEdit = document.getElementById('idBUTStrokaEdit');
let objBUTStrokaDel = document.getElementById('idBUTStrokaDel');

let objTextArea = document.getElementById('idTextArea');

let objTaxSumR = document.getElementById('idTaxSumR');
let objTaxSumK = document.getElementById('idTaxSumK');
let objGPR = document.getElementById('idGPR');
let objGPK = document.getElementById('idGPK');

let objBUTSaveNowData = document.getElementById('idBUTSaveNowData');
let objBUTLoadNowData = document.getElementById('idBUTLoadNowData');
let objBUTSaveAndPrintOrder = document.getElementById('idBUTSaveAndPrintOrder');
let objBUTAddOrderInReestr = document.getElementById('idBUTAddOrderInReestr');
let objBUTOnlySaveOrde = document.getElementById('idBUTOnlySaveOrde');
let objBUTNewOrder = document.getElementById('idBUTNewOrder');
let objBUTBack = document.getElementById('idBUTBack');



// КНОПКА ДЛЯ ПРОВЕРКИ ДЕЙСТВИЯ ИНИЦИАЛИЗАЦИИ (Перезагрузка страницы)
// var ini = document.getElementById('idTry');
// ini.onclick = function () {}


//Переменные
let cLog; //Хрень для вывода в лог
let region = '0'; //Регион
let noSUMS = '0'; //Номер судебного участка
let typeName;// Тип фамилии (м/ж)



//Общая зачистка
// ????????????????????????????????????????????????????????????

//XYZ.Загружаем Базу Имен/Отчеств
//Зачистка даталиста Имен
let childArray = objBGName12DL.children;
let cL = childArray.length;
while (cL > 0) { cL--; objBGName12DL.removeChild(childArray[cL]); }
//Загрузка нового массива имен из  ОБЪЕКТА
for (let namesOfArray of Object.keys(names1Array)) {
    let option = document.createElement("option");
    option.setAttribute("value", namesOfArray.toString());
    option.value = `${namesOfArray}`;
    objBGName12DL.appendChild(option);
}

//Зачистка даталиста Отчтеств
childArray = objBGName13DL.children;
cL = childArray.length;
while (cL > 0) { cL--; objBGName13DL.removeChild(childArray[cL]); }
//Загрузка нового массива Отчтеств 
for (let namesOfArray of Object.keys(names2Array)) {
    let option = document.createElement("option");
    option.setAttribute("value", namesOfArray.toString());
    option.value = namesOfArray;
    objBGName13DL.appendChild(option);
}

// ВЫБОР РЕГИОНА + данные от выбора (начало)
// objRegion.onchange = function () {
objRegion.onclick = function () {
    //Заполнение Участков
    //Очистка Участков
    for (let i = objNUMS.options.length - 1; i >= 0; i--) { objNUMS.remove(i); }
    //Создаем номер региона
    region = objRegion.value.substring(0, 2);
    //Делаем видимым выбор участка
    if (objRegion.value != "Выбор региона...") { objNUMS.style.visibility = "visible"; obNUMSLabel.style.visibility = "visible"; }
    else { objNUMS.style.visibility = "hidden"; obNUMSLabel.style.visibility = "hidden"; return; }
    for (const key in objSuDATA) {
        let option = document.createElement("option");
        option.setAttribute("value", objSuDATA[key].suNo);
        option.value = objSuDATA[key].suNo;
        option.innerHTML = objSuDATA[key].suNo;
        objNUMS.appendChild(option);
    }

    //Заполняем список участков по выбранному региону //С Т А Р О Е
    // for (let item in dataSU.regionSel[`reg${region}`]) {
    //     let option = document.createElement("option");
    //     option.setAttribute("value", item.toString());
    //     option.value = dataSU.regionSel[`reg${region}`][item];
    //     option.innerHTML = dataSU.regionSel[`reg${region}`][item];        
    //     objNUMS.appendChild(option);
    // }

    //Заполнение налоговых (взыскателей) региона    
    //Зачистка налоговых
    for (let i = objMFNS_No.options.length - 1; i >= 0; i--) { objMFNS_No.remove(i); }
    //Заполняем список налоговых по выбранному региону
    for (let item in essential) {
        let option = document.createElement("option");
        option.setAttribute("value", item.toString());
        option.value = essential[item][0];
        option.innerHTML = essential[item][0];
        objMFNS_No.appendChild(option);
    }
    //Старое если заполнение налоговых от региона работает нормально УДАЛИТЬ
    // for (let item in dataSU.regionSel[`mifns${region}`]) {
    //     let option = document.createElement("option");
    //     option.setAttribute("value", item.toString());
    //     option.value = dataSU.regionSel[`mifns${region}`][item];
    //     option.innerHTML = dataSU.regionSel[`mifns${region}`][item];
    //     objMFNS_No.appendChild(option);
    // }
    //Заполнение налоговых (получателей госпошлины) региона
    //Зачистка налоговых
    for (let i = objMFNSGP_No.options.length - 1; i >= 0; i--) { objMFNSGP_No.remove(i); }
    //Заполняем список налоговых по выбранному региону
    for (let item in essential) {
        let option = document.createElement("option");
        option.setAttribute("value", item.toString());
        option.value = essential[item][0];
        option.innerHTML = essential[item][0];
        objMFNSGP_No.appendChild(option);
    }
    //Место жительства (город)
    objBGCity.value = objRegion.value.substr(5, objRegion.value.length);
    //Место рождения
    switch (region) {
        case '78': objBGBornPlace.value = "гор.Ленинград"; break;
        case '47': objBGBornPlace.value = "Ленинградская обл.,"; break;
        case '77': objBGBornPlace.value = "гор.Москва"; break;
        default: objBGBornPlace.value = ""; break;
    }
}// ВЫБОР РЕГИОНА + данные от выбора (конец)

//ВЫБОР УЧАСТКА + данные от выбора (начало)
// objNUMS.onchange = selSUNOM;
objNUMS.onclick = selSUNOM;
function selSUNOM() {
    //Указываем номер участка


    // objNUMS.value = "7";//УБРАТЬ ПОСЛЕ ГОТОВНОСТИ ПРИКАЗА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    noSUMS = objNUMS.value
    objJudOnBoard.value = "Судья по штату";//При смене участка устанавливаем по штату
    judOnBoard();
    //Сопроводительное письмо + подпись
    objSPprint.value = objSuDATA[`su_${region}_${noSUMS}`].soprovodPrint;
    spNoPrint();
    switch (objSuDATA[`su_${region}_${noSUMS}`].soprovodPrint) {
        case "Подписывет помощник":
            objSUPomList.value = "";
            objSPomDolj.value = "";
            break;
        default: break;
    }

    //Указывем судью этого участка по умолчанию
    if (noSUMS != "Выбор участка...") { objJudFIO.value = objSuDATA[`su_${region}_${noSUMS}`].ms; }
    else { objJudFIO.value = ""; return; } //ОТПРАВИТЬ ПОТОМ В ЗАЧИСТКУ!!!!!!!!!!!!!!!

    //Указываем текущую дату
    let date = new Date();
    let date_getMonth = date.getMonth() + 1;// let currentDate = date.toISOString().slice(0, 10); console.log(currentDate);
    if (date_getMonth < 10) { date_getMonth = "0" + date_getMonth };
    let dataDayTemp = String(date.getDate());
    if (dataDayTemp.length < 2) { dataDayTemp = "0" + dataDayTemp };
    // let currentDate = date.getFullYear() + "-" + date_getMonth + "-0" + date.getDate();
    let currentDate = date.getFullYear() + "-" + date_getMonth + "-" + dataDayTemp;
    objDataOrder.value = currentDate;//let date2 = new Date().toLocaleString("ru-RU", {timeZone: "Europe/Moscow"})

    // //Указываем текущую дату
    // let date = new Date()//.toLocaleString("ru-RU", {timeZone: "Europe/Moscow"});console.log(date);
    // let currentDate = date.toISOString().slice(0, 10); console.log(currentDate);
    // objDataOrder.value = currentDate;//ЗАНАЧКА let date2 = new Date().toLocaleString("ru-RU", {timeZone: "Europe/Moscow"})
    // console.log(date.toISOString().slice(0, 20));
    //УИД
    let temp = noSUMS;
    while (temp.length < 4) { temp = "0" + temp }
    let = noSUMS == "7" ? temp = "0214" : temp = temp;//Исключения    
    objUID1.value = `${region}MS${temp}-01`;
    objUID2.value = date.getFullYear();
    objUID3.value = "000000";
    objUID4.value = "00";
    //Номер приказа
    objSOno1.value = "2А-"
    objSOno2.value = ""
    objSOno3.value = `/${date.getFullYear()}-${noSUMS}`;
    //Налоговая взыскатель по номеру участка
    objMFNS_No.value = objSuDATA[`su_${region}_${noSUMS}`].mifnsVZSK;
    //Налоговая получатель госпошлины по номеру участка
    objMFNSGP_No.value = objSuDATA[`su_${region}_${noSUMS}`].mifnsGP[0];
    //ОКТМО для госпошлины    
    objMFNS_OKTMO_GP.value = objSuDATA[`su_${region}_${noSUMS}`].mifnsGP[1];
    //Зачистка улиц
    childArray = objlistStreetBG.children;
    cL = childArray.length;
    while (cL > 0) { cL--; objlistStreetBG.removeChild(childArray[cL]); }
    //Загрузка нового массива улиц
    for (let i = 0; i < objSuDATA[`su_${region}_${noSUMS}`].streets.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i.toString());
        option.value = objSuDATA[`su_${region}_${noSUMS}`].streets[i];
        option.innerHTML = objSuDATA[`su_${region}_${noSUMS}`].streets[i];
        objlistStreetBG.appendChild(option);
    }
    //Чек бох "пени период" в зависимости от участка
    let = objSuDATA[`su_${region}_${noSUMS}`].penyPeriod == 1 ? objCBPenyPer.checked = true : objCBPenyPer.checked = false;
    checkPenyPeriod();

    //Чек бох "Индекс BG" в зависимости от участка
    let = objSuDATA[`su_${region}_${noSUMS}`].indexBG == 1 ? objCBBGIndex.checked = true : objCBBGIndex.checked = false;
    checkIndexBG();

    //ОКТМО ПО УЧАСТКУ:
    //Зачистка ОКТМО по участку
    childArray = objOKTMO_TTList.children;
    cL = childArray.length;
    while (cL > 0) { cL--; objOKTMO_TTList.removeChild(childArray[cL]); }
    //Загрузка ОКТМО по участку
    for (let i = 0; i < objSuDATA[`su_${region}_${noSUMS}`].oktmoTT.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i.toString());
        option.value = objSuDATA[`su_${region}_${noSUMS}`].oktmoTT[i];
        option.innerHTML = objSuDATA[`su_${region}_${noSUMS}`].oktmoTT[i];
        objOKTMO_TTList.appendChild(option);
    }


}
//ВЫБОР УЧАСТКА + данные от выбора (конец)


//ВЫБОР ПО "по штату" (начало)
objJudOnBoard.onchange = judOnBoard;
function judOnBoard() {
    switch (objJudOnBoard.value) {
        case "Судья по штату":
            objNumSUio.style.visibility = "hidden"; objidNumSUioLBL.style.visibility = "hidden"; objidJudFIOio.style.visibility = "hidden"; objidJudFIOioLBL.style.visibility = "hidden";
            objNumSUio.value = ""; objidJudFIOio.value = "";
            if (noSUMS != '0') { objJudFIO.value = objSuDATA[`su_${region}_${noSUMS}`].ms; }
            break;
        case "Судья в отпуске":
            objNumSUio.style.visibility = "visible"; objidNumSUioLBL.style.visibility = "visible"; objidJudFIOio.style.visibility = "visible"; objidJudFIOioLBL.style.visibility = "visible";
            if (noSUMS != '0') { objJudFIO.value = objSuDATA[`su_${region}_${noSUMS}`].ms; }
            break;
        case "Судья не назначен":
            objNumSUio.style.visibility = "visible"; objidNumSUioLBL.style.visibility = "visible"; objidJudFIOio.style.visibility = "visible"; objidJudFIOioLBL.style.visibility = "visible";
            objJudFIO.value = "";
            break;
        default: objNumSUio.style.visibility = "hidden"; objidNumSUioLBL.style.visibility = "hidden"; objidJudFIOio.style.visibility = "hidden"; objidJudFIOioLBL.style.visibility = "hidden";
            objNumSUio.value = ""; objidJudFIOio.value = "";
            break;
    }
}
//ВЫБОР ПО "по штату" (конец)

//ВЫБОР СОПРОВОДИТЕЛЬНОЕ ПИСЬМО по "не печатать" (начало)
objSPprint.onchange = spNoPrint;
function spNoPrint() {
    objSUPomList.value = ""; objSPomDolj.value = "";
    switch (objSPprint.value) {
        case "Не печатать":
            objSUPomLabel.style.visibility = "hidden"; objSUPomList.style.visibility = "hidden"; objSPomDoljLabel.style.visibility = "hidden"; objSPomDolj.style.visibility = "hidden";
            break;
        case "Подписывает судья":
            objSUPomLabel.style.visibility = "hidden"; objSUPomList.style.visibility = "hidden"; objSPomDoljLabel.style.visibility = "hidden"; objSPomDolj.style.visibility = "hidden";
            break;
        case "Подписывет помощник":
            objSUPomLabel.style.visibility = "visible"; objSUPomList.style.visibility = "visible"; objSPomDoljLabel.style.visibility = "visible"; objSPomDolj.style.visibility = "visible";
            //Если известен регион и участок - ЗАПОЛНЯЕМ
            if (region != "0" && noSUMS != "0") {
                //Зачистка помощников
                let childArray = objSUPomListLIST.children;
                cL = childArray.length;
                while (cL > 0) { cL--; objSUPomListLIST.removeChild(childArray[cL]); }
                //Загрузка нового массива помощников
                for (let i = 0; i < objSuDATA[`su_${region}_${noSUMS}`].pomMS.length; i++) {
                    let option = document.createElement("option");
                    option.setAttribute("value", i.toString());
                    option.value = objSuDATA[`su_${region}_${noSUMS}`].pomMS[i];
                    option.innerHTML = objSuDATA[`su_${region}_${noSUMS}`].pomMS[i];
                    objSUPomListLIST.appendChild(option);
                }
            }
            break;
        default: break;
    }
}
//ВЫБОР СОПРОВОДИТЕЛЬНОЕ ПИСЬМО по "не печатать" (конец)

//ЧЕКБОКСЫ
//НАЖАТИЕ НА ЧЕКБОХ ИНДЕКСBG (начало)
objCBBGIndex.onclick = checkIndexBG;
function checkIndexBG() {
    if (objCBBGIndex.checked) { objBGIndex.style.visibility = "visible"; }
    else { objBGIndex.style.visibility = "hidden"; objBGIndex.value = "" }
}
//НАЖАТИЕ НА ЧЕКБОХ ИНДЕКСBG (конец)
//НАЖАТИЕ НА ЧЕКБОХ 18- (начало)
objCB18.onclick = check18;
function check18() {
    if (objCB18.checked) {
        objTR18.style.visibility = "visible";
        obj18Name1.style.visibility = "visible";
        obj18Name2.style.visibility = "visible";
        obj18Name3.style.visibility = "visible";
        obj18BornData.style.visibility = "visible";
        obj18BornPlace.style.visibility = "visible";
        obj18INN.style.visibility = "visible";
    }
    else {
        objTR18.style.visibility = "hidden"; objTR18.value = "";
        obj18Name1.style.visibility = "hidden"; obj18Name1.value = "";
        obj18Name2.style.visibility = "hidden"; obj18Name2.value = "";
        obj18Name3.style.visibility = "hidden"; obj18Name3.value = "";
        obj18BornData.style.visibility = "hidden"; obj18BornData.value = "";
        obj18BornPlace.style.visibility = "hidden"; obj18BornPlace.value = "";
        obj18INN.style.visibility = "hidden"; obj18INN.value = "";
    }
}
//НАЖАТИЕ НА ЧЕКБОХ 18- (конец)
//НАЖАТИЕ НА ЧЕКБОХ "УКАЫВАТЬ ПЕНИ" (начало)
objCBPenyPer.onclick = checkPenyPeriod;
function checkPenyPeriod() {
    objPNStart.value = ""; objPNEnd.value = ""
    if (objCBPenyPer.checked) { objPNStart.style.visibility = "visible"; objPNEnd.style.visibility = "visible"; }
    else { objPNStart.style.visibility = "hidden"; objPNEnd.style.visibility = "hidden"; }
}
//НАЖАТИЕ НА ЧЕКБОХ "УКАЫВАТЬ ПЕНИ" (конец)

//ПРОВЕРКИ
//Проверка на ввод только чисел и количества символов.
function onlyNumWihtLimChar(id, strLength) {
    let objonlyNumWihtLimCharer = document.getElementById(id);
    let val = objonlyNumWihtLimCharer.value;
    // Проверка вводимого символа
    if (/\D/.test(val)) {
        val = val.replace(/\D/g, '');
        objonlyNumWihtLimCharer.value = val;
        let audio = new Audio('beep.mp3');
        audio.play();
    }
    // Цвет окна если символов не необходимое количество
    if (objonlyNumWihtLimCharer.value.length == strLength || objonlyNumWihtLimCharer.value.length == 0) {
        objonlyNumWihtLimCharer.style.backgroundColor = "#b7b8a6";
    }
    else { objonlyNumWihtLimCharer.style.backgroundColor = "#e65454"; }
}
//Проверка на ввод только чисел.
function onlyNum(id, mean) {
    let objonlyNum = document.getElementById(id);
    let val = objonlyNum.value;
    // Проверка вводимого символа
    if (/\D/.test(val)) {
        val = val.replace(/\D/g, '');
        // objonlyNum.value = val;
        let audio = new Audio('beep.mp3');
        audio.play();
    }
    objonlyNum.value = Number(val);
    // Цвет окна если символов не необходимое количество
    if (Number(objonlyNum.value) < mean) { objonlyNum.style.backgroundColor = "#b7b8a6"; }
    else { objonlyNum.style.backgroundColor = "#e65454"; }
}


//ЦИФРОВЫЕ ОКНА:(начало)
objTTR.onkeyup = onlyNum.bind(this, 'idTTR', 1000000000);// налог рубли
objTTK.onkeyup = onlyNum.bind(this, 'idTTK', 100);// налог копейки
objPNR.onkeyup = onlyNum.bind(this, 'idPNR', 1000000);// пени рубли
objPNK.onkeyup = onlyNum.bind(this, 'idPNK', 100);// пени копейки
//ЦИФРОВЫЕ ОКНА: с количеством символов
// objBGINN.onkeyup = function () {onlyNumWihtLimChar('idBGINN', 12);}
objUID2.onkeyup = onlyNumWihtLimChar.bind(this, 'idUID2', 4);// УИД2 год
objUID3.onkeyup = onlyNumWihtLimChar.bind(this, 'idUID3', 6);// УИД3 номер
objUID4.onkeyup = onlyNumWihtLimChar.bind(this, 'idUID4', 2);// УИД4 последние две
objSOno2.onkeyup = onlyNumWihtLimChar.bind(this, 'idSOno2', 4);// Номер дела
objMFNS_OKTMO_GP.onkeyup = onlyNumWihtLimChar.bind(this, 'idMFNS_OKTMO_GP', 8);// ОКТМО госпошлины
objBGIndex.onkeyup = onlyNumWihtLimChar.bind(this, 'idBGIndex', 6);// Индекс BG
objBGINN.onkeyup = onlyNumWihtLimChar.bind(this, 'idBGINN', 12);// ИНН BG
obj18INN.onkeyup = onlyNumWihtLimChar.bind(this, 'id18INN', 12);// ИНН 18
objKBKTT.onkeyup = onlyNumWihtLimChar.bind(this, 'idKBKTT', 20);// КБК НАЛОГ
objKBKPN.onkeyup = onlyNumWihtLimChar.bind(this, 'idKBKPN', 20);// КБК ПЕНИ
objOKTMO_TT.onkeyup = onlyNumWihtLimChar.bind(this, 'idOKTMO_TT', 8);// ИНН 18
//ЦИФРОВЫЕ ОКНА:(начало)

//ВЫБОР ИМЕНИ/ОТЧЕСТВА от ... (начало)
//ВЫБОР ИМЕНИ от ИМЕНИ
objBGName12.onkeyup = names2ToCange.bind(this, 'idBGName22');
function names2ToCange(id) {
    if (objBGName12.value == "") { return; }
    if (names1Array[`${objBGName12.value}`] != undefined) {
        document.getElementById(id).value = names1Array[`${objBGName12.value}`][0];
        document.getElementById(id).style.backgroundColor = "#b7b8a6";
        // Альтернатива нажатия кнопок МЖ (По имени определяем пол для фамилии)
        changeSurnameMW(0);
    }
    else {
        // Подбор имени по окончанию
        let last_symbol_name = objBGName12.value.slice(-1);
        switch (last_symbol_name) {
            case "у": last_symbol_name = "а"; break;
            case "е": last_symbol_name = "ы"; break;
            case "ю": last_symbol_name = "я"; break;
            default: break;
        }
        objBGName22.value = objBGName12.value.slice(0, -1) + last_symbol_name
        document.getElementById(id).style.backgroundColor = "#e2e48a";
    };
}
//ВЫБОР ОТЧЕСТВА от ОТЧЕСТВА
objBGName13.onkeyup = names3ToCange.bind(this, 'idBGName23');
function names3ToCange(id) {
    if (objBGName13.value == "") { return; }
    // Оглы угли и тп. 
    let temp = 3;
    let z = objBGName13.value;
    temp = temp + z.indexOf("оглы");
    temp = temp + z.indexOf("кызы");
    temp = temp + z.indexOf("угли");
    if (temp != 0) {
        objBGName23.value = objBGName13.value
        objTextArea.value = z + " " + z.indexOf("оглы") + " " + z.indexOf("кызы") + " " + z.indexOf("угли") + " " + temp;
        objBGName23.style.background = "#b7b8a6";//Обычный
        return;
    }
    //Поиск в базе если нет "оглы"
    if (names2Array[`${objBGName13.value}`] != undefined) {
        document.getElementById(id).value = names2Array[`${objBGName13.value}`][0];
        document.getElementById(id).style.backgroundColor = "#b7b8a6";
    }
    else {
        document.getElementById(id).value = "отчество отсутствует в базе";
        document.getElementById(id).style.backgroundColor = "#e65454";
    };
    // Проверка совпадения рода Имени и Отчества (Имя мужское, Отчество женское)
    if (names2Array[`${objBGName13.value}`] != undefined && names1Array[`${objBGName12.value}`] != undefined) {
        if (names2Array[`${objBGName13.value}`][1] != names1Array[`${objBGName12.value}`][1]) {
            objBGName12.style.background = "#e65454";//Красный
            objBGName13.style.background = "#e65454";//Красный
        }
        else {
            objBGName12.style.background = "#b7b8a6";//Обычный
            objBGName13.style.background = "#b7b8a6";//Обычный
        }
    }
}
//ВЫБОР ИМЕНИ/ОТЧЕСТВА от ... (конец)

//ОЧИСТКА ПО ДВОЙНОМУ НАЖАТИЮ (начало)
const elForClears = document.querySelectorAll('.clearValue');
function clearDblClick(e) { e.target.value = ''; }
elForClears.forEach((elForClear) => { elForClear.addEventListener('dblclick', clearDblClick); });

//Старый работающий способ
// function clearDblClick(id) {document.getElementById(id).value="";}
// objBGName11.ondblclick= clearDblClick.bind(this, 'idBGName11');
// objBGName12.ondblclick= clearDblClick.bind(this, 'idBGName12');
// objBGName13.ondblclick= clearDblClick.bind(this, 'idBGName13');....+другие
//ОЧИСТКА ПО ДВОЙНОМУ НАЖАТИЮ (конец)

//NO ENGLISH (начало)
const noEnglish = document.querySelectorAll('.no_english');
function clearEnglish(e) {
    // Проверка вводимого символа
    if (/[A-Za-z]/.test(e.target.value)) {
        // console.log("есть левый символ");
        let audio = new Audio('beep.mp3');
        audio.play();
    }
}
noEnglish.forEach((elForClear) => { elForClear.addEventListener('keyup', clearEnglish); });
//NO ENGLISH (конец)

//Корректируем написание корпуса (начало)
objBGKorp.onblur = function () {
    if (objBGKorp.value == "") { return; }
    let strKorp = objBGKorp.value;
    if (Number(strKorp)) { strKorp = `корп.${strKorp}`; }
    strKorp = strKorp.replace('к.', 'корп.');
    strKorp = strKorp.replace('кор.', 'корп.');
    strKorp = strKorp.replace('корпус', 'корп.');
    objBGKorp.value = strKorp;
}
//Корректируем написание корпуса (конец)
//Корректируем написание ЛИТЕР (начало)
objBGLiter.onblur = function () {
    if (objBGLiter.value == "") { return; }
    let strLtier = objBGLiter.value;
    if (strLtier.length < 2) {
        strLtier = `лит.${strLtier}`;
    }
    strLtier = strLtier.replace('л.', 'лит.');
    strLtier = strLtier.replace('л. ', 'лит.');
    strLtier = strLtier.replace('Л.', 'лит.');
    strLtier = strLtier.replace('Л. ', 'лит.');
    strLtier = strLtier.replace('литер', 'лит.');
    strLtier = strLtier.replace('литер ', 'лит.');
    strLtier = strLtier.replace('Литер', 'лит.');
    strLtier = strLtier.replace('Литер ', 'лит.');
    objBGLiter.value = strLtier;
}
//Корректируем написание ЛИТЕР (конец)

// НЕРОДНАЯ МИФНС ВЗЫСКАТЕЛЬ
objMFNS_No.onchange = function () {
    if (objMFNS_No.value != objSuDATA[`su_${region}_${noSUMS}`].mifnsVZSK) {
        objMFNS_No.style.backgroundColor = "#e2e48a";
    }
    else { objMFNS_No.style.backgroundColor = "#b7b8a6"; }
}


//ПОДГОТОВКА ПРИКАЗА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function makeOrder() {

    objSOno2.value = "12345";
    objBGName11.value = "Иванову";
    objBGName12.value = "Ивану";
    objBGName13.value = "Ивановичу";
    objBGName21.value = "Иванова";
    objBGName22.value = "Ивана";
    objBGName23.value = "Ивановича";

    objCBBGIndex.checked = true;
    objCBKorpStop.checked = true;
    objCBLiterStop.checked = true;
    objBGIndex.value = "190000";
    objBGCity.value = "Санкт-Петербург";
    objBGStreet.value = "Атаманская ул.";
    objBGHouse.value = "48";
    objBGKorp.value = "корп.7";
    objBGLiter.value = "лит.А";
    objBGRoom.value = "55";

    objBGINN.value = "123456789123";


    let date = new Date();
    let date_getMonth = date.getMonth() + 1;// let currentDate = date.toISOString().slice(0, 10); console.log(currentDate);
    if (date_getMonth < 10) { date_getMonth = "0" + date_getMonth };
    let dataDayTemp = String(date.getDate());
    if (dataDayTemp.length < 2) { dataDayTemp = "0" + dataDayTemp };
    let currentDate = date.getFullYear() + "-" + date_getMonth + "-" + dataDayTemp;
    // let currentDate = date.getFullYear() + "-" + date_getMonth + "-" + date.getDate();


    objBGDataBorn.value = currentDate;
    objBGBornPlace.value = "гор.Ленинград";

    // let objTR18 = document.getElementById('idTR18');
    // objCB18.checked = true;
    obj18Name1.value = "Хренова";
    obj18Name2.value = "Малолетнего";
    obj18Name3.value = "Дебила";
    obj18BornData.value = currentDate;
    obj18BornPlace.value = "гор.Дебиловск";
    obj18INN.value = "111111111111";





    //УИД
    let prUID = "УИД " + objUID1.value + "-" + objUID2.value + "-" + objUID3.value + "-" + objUID4.value;
    document.getElementById('idPrUID').innerText = prUID;
    // НОМЕР УЧАСТКА
    let prNoUch = document.getElementsByName('namePrNoUch');
    for (let iterator of prNoUch) { iterator.innerText = noSUMS; }
    //АДРЕС УЧАСТКА
    let prAdressUchFull = objSuDATA[`su_${region}_${noSUMS}`].msAddress[0] + " " + objSuDATA[`su_${region}_${noSUMS}`].msAddress[1];
    document.getElementById('idAdressUchFull').innerText = prAdressUchFull;
    //HTTP EMAIL УЧАСТКА
    let prHttp_email = "\n" + objSuDATA[`su_${region}_${noSUMS}`].msAddress[3];
    document.getElementById('idHttp_email').innerText = prHttp_email;
    //ТЕЛЕФОН ФАКС УЧАСТКА (не указываем)
    // let prPhone_Fax_SU = "\n" + objSuDATA[`su_${region}_${noSUMS}`].msAddress[2];
    let prPhone_Fax_SU = ""
    document.getElementById('idPhone_Fax_SU').innerText = prPhone_Fax_SU;
    //ДАТА ПРИКАЗА
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let data = new Date(`${objDataOrder.value}`);
    let prOrderData = String(data.toLocaleDateString("ru-RU", options)); //25 September  2016
    prOrderData = prOrderData.replace('г.', 'года');
    if (prOrderData.slice(1, 2) == " ") { prOrderData = '0' + prOrderData; }
    document.getElementById('idOrderData').innerText = prOrderData;
    //НОМЕР ПРОИЗВОДСТВА
    let prNumber_order = objSOno1.value + objSOno2.value + objSOno3.value;
    document.getElementById('idNumber_order').innerText = prNumber_order;

    //МИРОВОЙ СУДЬЯ
    let temp = "";
    switch (objJudOnBoard.value) {
        case "Судья по штату":
            temp = `Мировой судья судебного участка № ${noSUMS} Санкт-Петербурга ${objSuDATA[`su_${region}_${noSUMS}`].ms}`;
            break;
        case "Судья в отпуске":
        case "Судья не назначен":
            temp = `Мировой судья судебного участка №  ${objNumSUio.value} Санкт-Петербурга ${objidJudFIOio.value}, во исполнение обязанностей мирового судьи судебного участка № ${noSUMS} Санкт-Петербурга`;
            break;
        default:
            break;
    }
    document.getElementById('idSudiaOrIO').innerText = temp;

    //ВЗЫСКАТЕЛЬ 

    //К ДОЛЖНИКУ
    temp = objBGName11.value + " " + objBGName12.value + " " + objBGName13.value;
    document.getElementById('idName_dolgnik_2_dat').innerText = temp;

    //ДОПОЛНИТЕЛЬНЫЕ ДАННЫЕ ДОЛЖНИКА
    let prBGaddData = document.getElementsByName('nameData_dolgnik');
    temp = ", место жительства: "
    //Индекс 
    switch (objCBBGIndex.checked) {
        case true:
            if (objBGIndex.value != "") { temp = temp + objBGIndex.value + ", "; }
            break;
        default:
            break;
    }
    temp = temp + objBGCity.value + ", ";//Город
    temp = objBGStreet.value != "" ? temp + objBGStreet.value + ", " : temp;//Улица
    temp = objBGHouse.value != "" ? temp + "д." + objBGHouse.value + ", " : temp;//Дом
    temp = objBGKorp.value != "" ? temp + objBGKorp.value + ", " : temp;//Корпус
    temp = objBGLiter.value != "" ? temp + objBGLiter.value + ", " : temp;//Литер
    temp = objBGRoom.value != "" ? temp + "кв." + objBGRoom.value + ", " : temp;//Квартира
    temp = objBGINN.value != "" ? temp + "ИНН " + objBGINN.value + ", " : temp;//ИНН
    //Дата Рождения
    let options1 = { day: 'numeric', month: 'numeric', year: 'numeric' };
    let data1 = new Date(`${objBGDataBorn.value}`);
    let prData = String(data1.toLocaleDateString("ru-RU", options1)); //25 September  2016
    // if (prData.slice(1, 2) == " ") { prData = '0' + prData; }
    temp = temp + "дата рождения: " + prData + ", ";//Дата рождения
    temp = objBGBornPlace.value != "" ? temp + "место рождения: " + objBGBornPlace.value + ", " : temp;//Место рождения
    temp = temp + "место работы - неизвестно,";//Место работы
    //ЗАМЕНА ДАННЫХ BG В ДВУХ МЕСТАХ
    for (let iterator of prBGaddData) { iterator.innerText = temp; }
    //ВЗЫСКАТЬ С ДОЛЖНИКА
    let nameName3 = document.getElementsByName('nameName_dolgnik_1_rod');
    for (let iterator of nameName3) { iterator.innerText = objBGName21.value + " " + objBGName22.value + " " + objBGName23.value; }
    //НАЛОГОВАЯ ВЗЫСКАТЕЛЬ
    let mfnsFullData = "";
    for (const key in essential) {
        if (essential[`${key}`][0] == objMFNS_No.value) {
            mfnsFullData = essential[`${key}`][1] + ", " + essential[`${key}`][2] + ", ИНН " + essential[`${key}`][3] + ", КПП " + essential[`${key}`][4] + ", БИК " + essential[`${key}`][5] + ", получатель платежа: " + essential[`${key}`][6] + ", счет получателя " + essential[`${key}`][7] + ", в " + essential[`${key}`][8] + ", казначейский счет " + essential[`${key}`][9] + ",";
            break;
        }
    }
    document.getElementById('idVziskatel_Tax_Full').innerText = mfnsFullData;
    //НАЛОГОВАЯ ГОСПОШЛИНА И ОКТМО
    let mfnsFullDataGP = "";
    for (const key in essential) {
        if (essential[`${key}`][0] == objMFNSGP_No.value) {
            mfnsFullDataGP = "получатель платежа - " + essential[`${key}`][6] + ", ИНН " + essential[`${key}`][3] + ", КПП " + essential[`${key}`][4] + ", БИК " + essential[`${key}`][5] + ", счет получателя " + essential[`${key}`][7] + ", в " + essential[`${key}`][8] + ", казначейский счет " + essential[`${key}`][9] + ", КБК " + essential[`${key}`][10] + ", ОКТМО " + essential[`${key}`][11];
            break;
        }
    }
    document.getElementById('idEssential_Gos_Poshlina').innerText = mfnsFullDataGP;
    //ЗАКЛЮЧИТЕЛЬНАЯ ЧАСТЬ ПРИКАЗА
    temp = objSuDATA[`su_${region}_${noSUMS}`].orderEnd;
    temp = endingOrder[temp];
    //Вставляем номер участока в заключительную часть приказа (если он там есть)
    temp = temp.replace("*CHANGEnoSUMS*", noSUMS);
    document.getElementById('idEnding_Order').innerText = temp;
    //НЕЛЕТКИ
    // id='idNSL'
    //Собираем нелетку
    temp = ",";
    if (objCB18.checked) {
        //Дата Рождения
        let options2 = { day: 'numeric', month: 'numeric', year: 'numeric' };
        let data2 = new Date(`${obj18BornData.value}`);
        let prData18 = String(data2.toLocaleDateString("ru-RU", options2)); //25 September  2016
        // if (prData18.slice(1, 2) == " ") { prData18 = '0' + prData18; }
        // let temp18 = prData18;//Дата рождения
        temp = " - за несовершеннолетнего собственника имущества: " + obj18Name1.value + " " + obj18Name2.value + " " + obj18Name3.value + ", дата рождения: " + prData18 + ", место рождения: " + obj18BornPlace.value + ", ИНН " + obj18INN.value + ",";
    }
    document.getElementById('idNSL').innerText = temp;


    //СОПРОВОДИТЕЛЬНОЕ ПИСЬМО

    //*Adress_Uchastka_1*
    temp = objSuDATA[`su_${region}_${noSUMS}`].msAddress[0];
    let prAdr1 = document.getElementsByName('nameAdress_Uchastka_1');
    for (let iterator of prAdr1) { iterator.innerText = temp; }
    //*Adress_Uchastka_2*
    temp = objSuDATA[`su_${region}_${noSUMS}`].msAddress[1];
    let prAdr2 = document.getElementsByName('nameAdress_Uchastka_2');
    for (let iterator of prAdr2) { iterator.innerText = temp; }
    //*Phone_Fax_Uchastka*
    temp = objSuDATA[`su_${region}_${noSUMS}`].msAddress[2];
    let prAdr3 = document.getElementsByName('namePhone_Fax_Uchastka');
    for (let iterator of prAdr3) { iterator.innerText = temp; }
    //*short_date_order*    
    let prAdr4 = document.getElementsByName('nameshort_date_order');
    for (let iterator of prAdr4) { iterator.innerText = prOrderData; }
    //*number_order*
    let prAdr5 = document.getElementsByName('namenumber_order');

    for (let iterator of prAdr5) { iterator.innerText = objSOno1.value + objSOno2.value + objSOno3.value; }
    //*Text_Sopr*
    temp = objSuDATA[`su_${region}_${noSUMS}`].typeSP;
    switch (temp) {
        case 1: temp = soprovodText.variant1; break;
        case 2: temp = soprovodText.variant2; break;
        case 3: temp = soprovodText.variant3; break;
        case 4: temp = soprovodText.variant4; break;
        case 5: temp = soprovodText.variant5; break;
        case 6: temp = soprovodText.variant6; break;
        default: break;
    }
    temp = temp.replace(/Nomer_Uchastka/g, noSUMS)
    temp = temp.replace("*number_order*", prNumber_order)
    temp = temp.replace("*short_date_order*", prOrderData)
    let prAdr6 = document.getElementsByName('nameText_Sopr');
    for (let iterator of prAdr6) { iterator.innerText = temp; }





























    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // '19. ВСТАВЛЯЕМ ЗАКОНЫ ПО НЕСОВЕРШЕННОЛЕТНЕМУ
    //     If UF_Court_Order.Check_NSL.Value = True Then

    //         If tax_type_Transport = 0 And tax_type_Property = 0 And tax_type_NDFL = 1 Then
    //             'Меняем в тексте
    //                 UF_Court_Order.paste_place = "ст.ст.45"
    //                 UF_Court_Order.paste_text = "ст.ст.5, 27, 45"
    //                     Application.Run "Paste"
    //         Else
    //             'Заменяем в тексте "ст.ст.31" на "ст.ст.5, 27, 31" 'Меняем в тексте
    //                 UF_Court_Order.paste_place = "ст.ст.31"
    //                 UF_Court_Order.paste_text = "ст.ст.5, 27, 31"
    //                     Application.Run "Paste"
    //         End If

    //     End If
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






    //ЗАНАЧКА  ОБХОД ОБЪЕКТА С ПОИСКОМ КЛЮЧЕЙ И ЭЛЕМЕНТОВ
    //     for (const key in essential) {
    //     console.log(key + " тип кей: " + typeof (key));
    //     console.log(essential[`${key}`][0] + " тип: " + typeof (essential[`${key}`][0]));
    //     if (essential[`${key}`][0] == "СПб 17") { console.log("выход"); break; }
    // }

}
