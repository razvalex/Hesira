﻿var factory = function () {

    var controlTypes = {
        textBox: 1,
        textArea: 2,
        numberPicker: 3,
        numberPickerRange: 4,
        decimalNumberPicker: 5,
        datePicker: 6,
        datePickerRange: 7,
        timePicker: 8,
        singleSelect: 9,
        tagList: 10,
        listBox: 11,
        radioButtonList: 12,
        checkBoxList: 13,
        checkBox: 14,
        pagebreak: 15,
        title: 16,
        customControl: 17
    };

    var propertiesModels = [
        {
            type: controlTypes.textBox,
            tabs: [
                {
                    name: 'Settings',
                    glyphicon: 'wrench',
                    settings: [
                        {
                            type: controlTypes.textBox,
                            name: 'Label',
                            label: 'Label',
                            constraints: {
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ];

    var directions = {
        up: 'up',
        down: 'down',
        left: 'left',
        right: 'right'
    };

    var models = {
        controlTypes: controlTypes,
        propertiesModels: propertiesModels,
        directions: directions
    };

    return models;
};

if (typeof define == 'function' && define.amd) {
    define('bforms-formBuilder-models', [], factory);
} else {
    factory();
}