
const POSITION = { FIRST: 0, LAST: -1 }


// Min_size (0: tiny, 1: small, 2: medium (half?? screen), 3: big (full screen??))
// E.g. graphs can't be shown on the tiny ones.
const FIELDS = [{ id: 0, name: "Calories", category: "Calories", min_size: 0, unit_metric: "??", example_value: 2000 },
{ id: 1, name: "Speed", category: "Speed", min_size: 0, unit_metric: "km/h", example_value: 25.4 },
{ id: 2, name: "Crs Pt. Dist", category: "Course", min_size: 0, unit_metric: "km", example_value: "" },
{ id: 3, name: "Cadence", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 104 },
{ id: 4, name: "Avg. Cad.", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 89 },
{ id: 5, name: "Lap Cad.", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 89 },
{ id: 6, name: "Distance", category: "Distance", min_size: 0, unit_metric: "km", example_value: 99.5 },
{ id: 7, name: "Naut. Dist.", category: "Hidden", min_size: 0, unit_metric: "NM", example_value: 53.7 },
{ id: 8, name: "Elevation", category: "Elevation", min_size: 0, unit_metric: "m", example_value: 650 },
{ id: 9, name: "Accuracy", category: "General", min_size: 0, unit_metric: "m", example_value: 4 },
{ id: 10, name: "Accuracy", category: "General", min_size: 0, unit_metric: "m", example_value: 4 },
{ id: 11, name: "Grade", category: "Elevation", min_size: 0, unit_metric: "%", example_value: 8.7 },
{ id: 12, name: "Heading", category: "General", min_size: 0, unit_metric: "", example_value: "NW" },
{ id: 13, name: "HR Graph", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: 165 },
{ id: 14, name: "HR - Avg.", category: "Heart Rate", min_size: 0, unit_metric: "bpm", example_value: 140 },
{ id: 15, name: "HR - Lap", category: "Heart Rate", min_size: 0, unit_metric: "bpm", example_value: 140 },
{ id: 16, name: "HR - %Max.", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 80 },
{ id: 17, name: "HR - Avg. %Max.", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 18, name: "HR - Lap %Max", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 19, name: "HR - %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 20, name: "HR - Avg. %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 21, name: "HR - Lap %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 22, name: "HR Zone", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: 4 },
{ id: 23, name: "HR Graph", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: "" },
{ id: 24, name: "Laps", category: "Timer", min_size: 0, unit_metric: "", example_value: 4 },
{ id: 27, name: "Dist. to Dest", category: "Courses", min_size: 0, unit_metric: "km", example_value: 42.4 },
{ id: 28, name: "Time to Dest.", category: "Courses", min_size: 0, unit_metric: "", example_value: "01:32:58" },
{ id: 29, name: "Dist. to Next", category: "Courses", min_size: 0, unit_metric: "km", example_value: 30.5 },
{ id: 30, name: "Time to Next", category: "Courses", min_size: 0, unit_metric: "", example_value: "01:32:58" },
// { id: 31, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 32, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 33, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 34, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 35, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 36, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 37, name: "", category: "", min_size: 0, unit_metric: ""},
// { id: 38, name: "", category: "", min_size: 0, unit_metric: ""},
{ id: 45, name: "Heart Rate", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: 181 },
];

class Screen {

    fields = [];
    num_fields = 1;
    enabled = true;
    number = 0;

    constructor(number) {
        this.number = number;
    }

    addField(field, position) {
        if (position < 0) {
            position = this.fields.length;
        }
        this.fields.splice(position, 0, field);
        // TODO Warnings about field size (e.g. trying to draw graph on tiny) especially when the number of fields to display is changed.
    }

    removeField(position) {
        this.fields.splice(position, 1);
    }

    setNumberOfFields(num) {
        if (num < 1 || num > 10) {
            console.log("Number of fields must be 1 - 10 inclusive. Was: " + num);
            return false;
        }
        this.num_fields = num;
        // TODO Warnings about field size (e.g. trying to draw graph on tiny) especially when the number of fields to display is changed.
        return true;
    }

    populateOnDisplayList(parentElement) {
        // The list of 'on display'
        parentElement.empty();
        drawDisplayItems(this, parentElement);
    }

    drawScreen(deviceElement) {
        // TODO draw the garmin image.
        var i = 0;
        for (; i < 10 && i < this.fields.length; i++) {
            var field = FIELDS.find(element => element["id"] == this.fields[i]);
            var element = getDisplayElement(i, field["name"], field["example_value"], field["unit_metric"]);
            deviceElement.append(element);
        }
    }

    toBinary() {
        // TODO write out the binary data.
    }
}

function drawDisplayItems(screen, parentElement) {
    screen.fields.forEach(function (field_id, index, array) {
        var field = FIELDS.find(element => element["id"] == field_id);
        var name = field["name"];

        var p = $("<p></p>");
        if (index > 9) {
            // css to warn if more than 10 items in the list.
            p.addClass("warn-gt-10");
        } else {
            p.removeClass("warn-gt-10");
        }
        p.append(getDisplayListItemElement(field_id, name, index));
        p.append(getDeleteButtonElement());

        parentElement.append(p);
        window.currentlySelectedField = -1;

    });
}

function getDisplayListItemElement(field_id, name, index) {
    var e = $(getFieldLink(field_id, name));
    e.addClass("display_item");
    e.attr("id", index);

    e[0].onclick = function (e) {
        selectField(e);
    };
    return e;
}

function getDeleteButtonElement() {
    var delete_button = $('<a href="#." class="delete_button">X</a>');
    delete_button[0].onclick = function (e) {
        removeFieldFromScreen(e["srcElement"]["parentElement"]);
    };
    return delete_button;
}

window.screens = [];
window.currentScreen = 0;
window.currentlySelectedField = -1;

function getCurrentScreen() {
    // newCurrentScreen starts at 0. so minus one to offset.
    return window.screens[window.currentScreen];
}


function getDefaultPosition() {
    return POSITION.LAST;
    // TODO User option.
}

function selectField(e) {
    var field = $(e["srcElement"]);
    var newSelectedId = field.attr("id");

    var elem = $(".display_item.selected");
    if (elem.attr("id") != newSelectedId) {
        elem.removeClass("selected");
    }

    field.toggleClass("selected");
    if (field.hasClass("selected")) {
        window.currentlySelectedField = newSelectedId;
    } else {
        window.currentlySelectedField = -1;
    }
};

function addFieldToScreen(field_id) {
    var position = window.currentlySelectedField;
    if (position < 0) {
        position = getDefaultPosition();
    }
    var s = getCurrentScreen();
    s.addField(field_id, position);
    s.populateOnDisplayList($("#on_screen_list"));

    redrawScreen();
}

function removeFieldFromScreen(element) {
    // get position of the field in the ondisplay list
    var position = element["id"];
    var s = getCurrentScreen();
    s.removeField(position);
    s.populateOnDisplayList($("#on_screen_list"));
    window.currentlySelectedField = -1;

    redrawScreen();
}

function getDisplayElement(index, name, value, unit) {
    var element = $(`<div id="field_${index}" class="field">
                    <p class="field_name">${name}</p>
                    <p class="field_unit">
                        <span class="value">${value}</span>
                        <span class="unit">${unit}</span>
                    </p></div>`);
    return element;
}

function setCurrentScreen(newCurrentScreenNum) {
    // clear the ondisplay and garmin image.
    // draw new garmin and populate new ondisplay.
    window.currentScreen = newCurrentScreenNum - 1;


    var s_list_element = $("#on_screen_list");
    s_list_element.empty();
    if (window.currentScreen >= 0 ) {
        redrawScreen();
        getCurrentScreen().populateOnDisplayList(s_list_element);
    }
}

function redrawScreen() {
    var ds_element = $("#device_screen");
    ds_element.empty();
    var currentScreen = getCurrentScreen();
    currentScreen.drawScreen(ds_element);
    drawDeviceScreen(currentScreen.number);
}

function drawDeviceScreen(screen_number) {
    var fields = $(".field");
    fields.removeClass("show_1_col");
    fields.removeClass("show_2_col");

    var numDisplayFields = getCurrentScreen().num_fields;
    var ds = $("#device_screen");
    ds.removeClass(["show_1", "show_2", "show_3", "show_4", "show_5",
        "show_6", "show_7", "show_8", "show_9", "show_10"]);
    ds.addClass(`show_${numDisplayFields}`);

    var f;
    var i = 1;
    for (f of fields) {
        setDataFieldClass(f, i, numDisplayFields);
        i++;
        if (i > numDisplayFields) {
            break;
        }
    }
}

function setupTreeList() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active-list");
            this.classList.toggle("caret-down");
        });
    }
}


function convertCategoryToID(s) {
    return s.replace(/ /g, '');
}

function getFieldLink(id, name) {
    return `<a href="#." id="${id}">${name}</a>`;
}

function insertFieldsIntoTreeList() {
    var field;
    var categoryAsID;
    var a;
    var li;
    for (field of FIELDS) {
        categoryAsID = convertCategoryToID(field["category"]);
        a = $(getFieldLink(field["id"], field["name"]));
        a[0].onclick = function (ev) {
            addFieldToScreen(ev["srcElement"]["id"]);
        };
        li = $("<li></li>").append(a);
        $(`#${categoryAsID} ul`).append(li);
    }
}

function numFieldsToDisplayChanged(e) {
    console.log(e);
    console.log(e["target"].value);
    getCurrentScreen().setNumberOfFields(parseInt(e["target"].value));
    redrawScreen();
}

function setDataFieldClass(field, currentIndex, numDisplayFields) {
    const d = { 6: 5, 7: 4, 8: 3, 9: 2, 10: 1 };

    if (numDisplayFields <= 5) {
        setShow1Col(field);
    } else if (numDisplayFields >= 6) {
        if (currentIndex < d[numDisplayFields]) {
            setShow1Col(field);
        } else {
            setShow2Col(field);
        }
    }
}

function setShow2Col(field) {
    field.classList.add("show_2_col");
}

function setShow1Col(field) {
    field.classList.add("show_1_col");
}

function setupNumDataFieldsSpinner(number) {
    $(`#num_data_fields_${number}`)[0].addEventListener('change', numFieldsToDisplayChanged);
}

function addScreenListener() {
    $("#addScreenButton")[0].addEventListener('click', addNewScreen);
}

function selectedScreenListener(e) {
    selectedScreen(parseInt(e["srcElement"].id.split("_")[2]));
}

function selectedScreen(number) {
    hideAllScreens();
    $(`#screen_selector_${number}`).addClass("activeScreenSelector");

    $(`#screen_${number}`).addClass("activeScreen");
    setCurrentScreen(number);
}

function addNewScreen() {
    hideAllScreens();
    var number = window.screens.length + 1;
    initialiseScreen(number).addClass("activeScreen");
    getScreenSelectorButtonElement(number).insertBefore($("#addScreenButton").parent());
    setupNumDataFieldsSpinner(number);
    setCurrentScreen(number);

}

function deleteScreenListener(e) {
    var src = e["srcElement"];
    var num = parseInt(src.id.split("_")[2]);

    for (let i = num+1; i <= window.screens.length; i++) {
        moveScreenUp(i);
    }

    $(`#screen_list_item_${window.screens.length}`).remove();
    $(`#screen_${window.screens.length}`).remove();

    window.screens.splice(window.screens.length-1, 1);
    if (num > window.screens.length) {
        num = window.screens.length;
    }
    if (num < 1) {
        num = 0;
    }
    selectedScreen(num);
}

function moveScreenUpListener(e) {
    var src = e["srcElement"];
    moveScreenUp(parseInt(src.id.split("_")[2]));
}

function moveScreenUp(num) {
    if (num <= 1) {
        // already at the top
        return;
    }
    var li_clicked = moveScreen(num, num - 1);
    li_clicked.insertBefore(li_clicked.prev());
}

function moveScreenDownListener (e) {
    var src = e["srcElement"];
    moveScreenDown(parseInt(src.id.split("_")[2]));
}

function moveScreenDown(num) {
    if (num >= window.screens.length) {
        // already at the top
        return;
    }

    var li_clicked = moveScreen(num, num + 1);
    li_clicked.insertAfter(li_clicked.next());
}

function moveScreen(oldPosition, newPosition) {
    var li = $(`#screen_list_item_${newPosition}`);
    for (let c of li.children()) {
        c.id = c.id.replace(/\d+/g, oldPosition);
    }
    
    var li_clicked = $(`#screen_list_item_${oldPosition}`);
    for (let c of li_clicked.children()) {
        c.id = c.id.replace(/\d+/g, newPosition);
    }


    li_clicked.attr("id", li_clicked.attr("id").replace(/\d+/g, newPosition));
    li.attr("id", li.attr("id").replace(/\d+/g, oldPosition));

    var settings_old = $(`#screen_${oldPosition}`);
    for (let c of settings_old.children()) {
        c.id = c.id.replace(/\d+/g, newPosition);
    }

    var settings_new = $(`#screen_${newPosition}`);
    for (let c of settings_new.children()) {
        c.id = c.id.replace(/\d+/g, oldPosition);
    }

    settings_old.attr("id", settings_old.attr("id").replace(/\d+/g, newPosition));
    settings_new.attr("id", settings_new.attr("id").replace(/\d+/g, oldPosition));
    swap(window.screens, oldPosition-1, newPosition-1);

    return li_clicked;
}

function swap (arr, i, j) {
    var a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}

function hideAllScreens() {
    $(".screenSelectorItem").removeClass("activeScreenSelector");
    $(".screen_config").removeClass("activeScreen");
}

function initialiseScreen(number) {
    window.screens.push(new Screen(number));
    var element = getScreenConfigElement(number)
    $("#screen_settings").append(element);
    return element;
}

function getScreenSelectorButtonElement(number) {
    var selector = $(`<a href="#." id="screen_selector_${number}" class="screenSelectorItem activeScreenSelector">Screen ${number}</a>`);
    selector[0].addEventListener("click", selectedScreenListener);

    var delete_ = $(`<a href="#." id="delete_screen_${number}" class="delete_button">X</a>`);
    delete_[0].addEventListener("click", deleteScreenListener);

    var up = $(`<a href="#." id="up_screen_${number}" class="up_button">&uarr;</a>`);
    up[0].addEventListener("click", moveScreenUpListener);

    var down = $(`<a href="#." id="down_screen_${number}" class="down_button">&darr;</a>`);
    down[0].addEventListener("click", moveScreenDownListener);
    
    var li = $(`<li id="screen_list_item_${number}"></li>`);
    li.append(selector, delete_, up, down);
    return li;
}

function getScreenConfigElement(number) {
    return $(`<div id="screen_${number}" class="screen_config">
    <div id="screen_${number}_name" class="screen_name">Screen ${number}</div>
    <div id="screen_${number}_enabled" class="screen_enabled">Enabled</div>
    <div>Number of Data Fields:
        <select name="num_data_fields" id="num_data_fields_${number}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
</div>`)
}

$(document).ready(function () {
    insertFieldsIntoTreeList();
    setupTreeList();
    addNewScreen();
    addScreenListener()
});