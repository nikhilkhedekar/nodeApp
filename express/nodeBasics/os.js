const os = require("os");

const osArch = os.arch();//os architecture
// const osOpus = os.opus();//os cpu info
const osEndianness = os.endianness(); 
const osFreemem = os.freemem();//free memory
const osHomeDir = os.homedir();//return home directory of current user
const osHostname = os.hostname();//return hostname of os
const osLoadAvg = os.loadavg();//returns 15 min avg load taken by system
const osNetworkInterfaces = os.networkInterfaces();//return N/W interfaces
const osPlatform = os.platform();//returns platform e.g. "win32" "linux"
const osRelease = os.release();
const osTempDir = os.tmpdir();
const osTotalMem = os.totalmem();
const osType = os.type();
const osUptime = os.uptime();
const osUserInfo = os.userInfo();

const osMethods = console.log("OS Methods", { osArch, 
    // osOpus, 
    osEndianness, osFreemem, 
    osHomeDir, osHostname, osLoadAvg, osNetworkInterfaces, 
    osPlatform, osRelease, osTempDir, osTotalMem, 
    osType, osUptime, osUserInfo
});

module.exports = osMethods;