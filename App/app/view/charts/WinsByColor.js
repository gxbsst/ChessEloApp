/*
 * File: app/view/charts/WinsByColor.js
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

/*
    This chart has dynamic store // it's not shown inside SA
*/
Ext.define('Enif.view.charts.WinsByColor', {
    extend: 'Ext.Panel',
    alias: 'widget.charts.winsbycolor',

    requires: [
        'Enif.view.charts.WinsByColorViewModel',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.legend.Legend'
    ],

    viewModel: {
        type: 'charts.winsbycolor'
    },

    items: [
        {
            xtype: 'polar',
            height: '100%',
            width: '100%',
            colors: [
                '#bfd3f2',
                '#061b3d'
            ],
            store: 'WinsByColor',
            series: [
                {
                    type: 'pie',
                    label: {
                        field: 'wins',
                        display: 'rotate',
                        font: '24px Arial',
                        color: 'white',
                        'font-weight': 'bold'
                    },
                    angleField: 'wins'
                }
            ],
            interactions: [
                {
                    type: 'rotate'
                }
            ],
            legend: {
                xtype: 'legend',
                docked: 'left'
            }
        }
    ]

});