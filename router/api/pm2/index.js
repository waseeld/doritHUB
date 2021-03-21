const { exec } = require("child_process");
const express = require('express');
const pm2 = require('pm2');
const router = express.Router();

router.get('/', async (req, res) => {
    // console.log(await info());
    exec('python C:/pro/Dorit/doritHUB/lib/python/info.py', (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return {};
        }

        console.log(`Number of files ${stdout}`);
        stdout = JSON.parse(stdout.split("'").join('"'));
        res.json({
            state: 200,
            data: {
                totalMem: stdout.totalMem,
                usedMem: stdout.usedMem,
                freeMem: stdout.freeMem,
                cached: stdout.cached,
                activeMem: stdout.activeMem,
                available: stdout.available,
                cpuPercent: stdout.cpuPercent
            }
        });
    });
})

router.get("/list", (req, res) => {
    pm2.list((err, list) => {
        res.json(list)
    })
})

router.get('/restart/:name', (req, res) => {
    pm2.restart(req.params.name, (err, proc) => {
        res.json(proc)
    })
})

router.get('/stop/:name', (req, res) => {
    pm2.stop(req.params.name, (err, proc) => {
        res.json(proc)
    })
})

router.get('/delete/:name', (req, res) => {
    pm2.delete(req.params.name, (err, proc) => {
        res.json(proc)
    })
})

router.get('/reload/:name', (req, res) => {
    pm2.reload(req.params.name, (err, proc) => {
        res.json(proc)
    })
})

module.exports = router;