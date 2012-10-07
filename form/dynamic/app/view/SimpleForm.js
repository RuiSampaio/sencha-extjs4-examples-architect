/*
 * File: app/view/SimpleForm.js
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

Ext.define('Sencha.view.SimpleForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.simpleform',

    requires: [
        'Sencha.view.SaveCancelToolbar'
    ],

    frame: true,
    width: 350,
    bodyPadding: '5 5 0',
    collapsible: true,
    title: 'My Form',
    url: 'save-form.php',

    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            url: 'save-form.php'
        }, me.initialConfig);

        Ext.applyIf(me, {
            defaults: {
                msgTarget: 'side',
                labelWidth: 75
            },
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    name: 'firstName',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'First Name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    name: 'lastName',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'Last Name'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    name: 'company',
                    fieldLabel: 'Company'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    name: 'email',
                    afterLabelTextTpl: [
                        '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                    ],
                    fieldLabel: 'Email',
                    vtype: 'email'
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'dob',
                    fieldLabel: 'DOB'
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    name: 'age',
                    fieldLabel: 'Age',
                    maxValue: 100,
                    minValue: 0
                },
                {
                    xtype: 'timefield',
                    anchor: '100%',
                    name: 'time',
                    fieldLabel: 'Time',
                    maxValue: '6:00pm',
                    minValue: '8:00am'
                }
            ],
            dockedItems: [
                {
                    xtype: 'savecanceltoolbar',
                    dock: 'bottom'
                }
            ]
        });

        me.callParent(arguments);
    }

});