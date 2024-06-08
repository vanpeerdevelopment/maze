/**
 * For more information visit the documentation: https://pm2.keymetrics.io/docs/usage/application-declaration/
 */

module.exports = {
  apps: [
    {
      name: 'maze',
      interpreter: '/usr/bin/node',
      cwd: '/home/nodejs/maze/packages/api',
      script: './dist/app.js',
      env: {
        NODE_ENV: 'production',
        MAZE_PORT: '3000',
      },
    },
  ],
  deploy: {
    production: {
      user: 'nodejs',
      key: '$HOME/.ssh/maze.pub',
      host: 'maze.zavo.academy',
      ref: 'origin/main',
      repo: 'git@github.com:vanpeerdevelopment/maze.git',
      path: '/home/nodejs/maze',
    },
  },
};
