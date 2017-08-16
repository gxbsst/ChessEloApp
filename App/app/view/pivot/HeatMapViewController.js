/*
 * File: app/view/pivot/HeatMapViewController.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Enif.view.pivot.HeatMapViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pivot.heatmap',

    onStatComboChange: function(selectfield, newValue, oldValue, eOpts) {
        Ext.getStore("pivot.HeatMap").changeDataField(newValue);
    }

});