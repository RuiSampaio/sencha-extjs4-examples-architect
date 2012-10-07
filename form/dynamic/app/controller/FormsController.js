/*
 * File: app/controller/FormsController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.controller.FormsController', {
    extend: 'Ext.app.Controller',

    views: [
        'SimpleForm',
        'FieldSetForm',
        'MultiColumnForm',
        'TabForm',
        'InnerTabsForm'
    ],

    onCancelClick: function(button, e, options) {
        button.up('form').getForm().reset();
    },

    onSimpleFormSave: function(button, e, options) {
        button.up('form').getForm().isValid();

        //logic to send form data to server
    },

    onFieldSetFormSave: function(button, e, options) {
        button.up('form').getForm().isValid();

        //logic to send form data to server
    },

    onMultiColumnFormSave: function(button, e, options) {
        button.up('form').getForm().isValid();

        //logic to send form data to server
    },

    onTabFormSave: function(button, e, options) {
        button.up('form').getForm().isValid();

        //logic to send form data to server
    },

    onInnerTabsFormSave: function(button, e, options) {
        button.up('form').getForm().isValid();

        //logic to send form data to server
    },

    init: function(application) {
        this.control({
            "savecanceltoolbar button[action=cancel]": {
                click: this.onCancelClick
            },
            "simpleform button[action=savel]": {
                click: this.onSimpleFormSave
            },
            "fieldsetform button[action=save]": {
                click: this.onFieldSetFormSave
            },
            "multicolumnform button[action=save]": {
                click: this.onMultiColumnFormSave
            },
            "tabform button[action=save]": {
                click: this.onTabFormSave
            },
            "innertabsform button[action=save]": {
                click: this.onInnerTabsFormSave
            }
        });
    }

});