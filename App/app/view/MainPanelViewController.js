/*
 * File: app/view/MainPanelViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.0.
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

Ext.define('Enif.view.MainPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainpanel',

    onAddGameTap: function(button, e, eOpts) {
        //Ext.create('Enif.view.AddNewGame').show();
        var dialog = Ext.create({
            xtype: 'dialog',

            items: [
            {xtype: 'addgameform'}
            ],


            buttons: {
                close: function() {  // standard button (see below)
                    dialog.destroy();

                }
            }
        });

        dialog.show();
    },

    onRefreshButtonTap: function(button, e, eOpts) {
        Enif.app.getController('storeLoadController').reloadAllStores();
    }

});