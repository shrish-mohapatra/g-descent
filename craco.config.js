const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FD8200',
                            '@link-color': '#FD8200',
                            '@border-radius-base': '4px',
                            '@font-family': `'Questrial', sans-serif`
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};