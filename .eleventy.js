module.exports = function(config) {

    config.setBrowserSyncConfig({
        https: {
            key: '/usr/local/etc/ssl/localhost.key',
            cert: '/usr/local/etc/ssl/localhost.crt'
        }
    });
    config.addPassthroughCopy("src/js");
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};