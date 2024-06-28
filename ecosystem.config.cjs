module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            port: '3005',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
            autorestart: true,
            watch: true,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development',
                HOST: 'localhost',  // Change to your desired host
                PORT: 3005          // Change to your desired port
            },
            env_production: {
                NODE_ENV: 'production',
                HOST: '0.0.0.0',  // Change to your desired host
                PORT: 8080       // Change to your desired port
            }
        }
    ]
}
