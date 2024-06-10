# maze

Walk through a randomly generated maze using a REST api

## Digital Ocean

### Droplet creation and configuration

1. Amsterdam - Datacenter 3 - AMS3 - default VPC
2. Node image
3. Size: basic - regular - smallest
4. Ssh key: maze.pub
5. Improved metrics
6. Name: maze
7. Tags: maze, zavo
8. Setup IPv4 (and IPv6: was not working with python request module) DNS for maze.zavo.academy
9. Login using ssh: `ssh -i ~/.ssh/maze root@maze.zavo.academy`
10. `corepack enable pnpm`
11. Grant ssh access to nodejs user
    - Create .ssh directory: `mkdir /home/nodejs/.ssh`
    - Copy ssh keys: `cp /root/.ssh/authorized_keys /home/nodejs/.ssh/authorized_keys`
    - Change ownership: `chown -R nodejs:nodejs /home/nodejs/.ssh`
12. By default this droplet comes with following installed
    - Users: root, nodejs
    - Ubuntu
    - Node LTS
    - [PM2 process manager](https://pm2.keymetrics.io/docs) used by nodejs user
    - Nginx proxying port 80 to port 3000
    - Example hello application
13. Setup ssl using certbot and letsencrypt as root user following [this guide](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-22-04).
14. Stop and remove the hello application from PM2: `pm2 delete hello && pm2 save`
15. Provision maze repo on droplet: `pnpm pm2:deploy:provision`
16. Deploy latest maze on droplet: `pnpm pm2:deploy`
17. After first deploy login using ssh and run `pm2 save`
