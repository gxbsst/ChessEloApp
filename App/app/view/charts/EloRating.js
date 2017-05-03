/*
 * File: app/view/charts/EloRating.js
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

/*
    Series for this chart are generated in the ViewController dynamicall
    Don't forget to add series to the requires (needed for the production build)
    FYI: The data are dynamic - not shown inside SA canvas
*/
Ext.define('Enif.view.charts.EloRating', {
    extend: 'Ext.Container',
    alias: 'widget.charts.elorating',

    requires: [
        'Enif.view.charts.EloRatingViewModel',
        'Enif.view.charts.EloRatingViewController',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.legend.Legend',
        'Ext.chart.interactions.CrossZoom',
        'Ext.chart.interactions.ItemInfo',
        'Ext.chart.series.Line'
    ],

    controller: 'charts.elorating',
    viewModel: {
        type: 'charts.elorating'
    },

    items: [
        {
            xtype: 'cartesian',
            height: '90%',
            itemId: 'mylinechart',
            width: '90%',
            margin: 25,
            padding: 20,
            colors: [
                '#115fa6',
                '#94ae0a',
                '#a61120',
                '#ff8809',
                '#ffd13e',
                '#a61187',
                '#24ad9a',
                '#7c7474',
                '#a66111'
            ],
            store: 'EloRatinChart',
            innerPadding: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 10
            },
            axes: [
                {
                    type: 'category',
                    renderer: function(axis, label, layoutContext, lastLabel) {
                        return Ext.Date.format(new Date(label), 'd.m.y');
                    },
                    fields: [
                        'timestamp'
                    ],
                    title: 'Dates'
                },
                {
                    type: 'numeric',
                    fields: [
                        'player0Rating',
                        'player1Rating',
                        'player2Rating',
                        'player3Rating',
                        'player4Rating',
                        'player5Rating',
                        'player6Rating',
                        'player7Rating',
                        'player8Rating'
                    ],
                    grid: {
                        odd: {
                            line: '#e8e8e8'
                        }
                    },
                    margin: 10,
                    position: 'right',
                    title: 'Elo rating'
                }
            ],
            legend: {
                xtype: 'legend',
                docked: 'bottom'
            },
            listeners: {
                initialize: 'onMylinechartInitialize'
            },
            interactions: [
                {
                    type: 'crosszoom'
                },
                {
                    type: 'iteminfo',
                    enabled: false
                }
            ]
        }
    ]

});