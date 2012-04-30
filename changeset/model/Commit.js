Ext.define('changeset.model.Commit', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'revision', type: 'string'},
        {name: 'url', type: 'string'},
        {name: 'author', type: 'object'},
        {name: 'timestamp', type: 'date'},
        {name: 'message', type: 'string'},
        {name: 'tree', type: 'object'},
        {name: 'parents', type: 'array'}
    ]
});