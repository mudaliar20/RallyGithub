Ext.define('changeset.data.GithubProxy', {
    extend: 'Ext.data.proxy.Rest',

    statics: {
        /**
         * Build Commit record from Github api data.
         */
        extractCommitValues: function(data) {
            var output = {
                revision: data.sha,
                url: data.url,
                author: data.author,
                parents: data.parents
            };

            var commit = data.commit;
            if (commit) {
                Ext.apply(output, commit);
                output.timestamp = commit.author.date;
            }
            return output
        }
    },

    stripRallyHeaders: true,
    pageParam: 'page',
    limitParam: 'per_page',
    startParam: undefined
});