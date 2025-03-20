const { networkInterfaces } = require("os");

// Allowed MAC addresses (normalized)
const allowedMACs = [
    "AC:86:A3:D4:AA:7F",
    "04:13:7A:88:83:0E",
    "40:DE:24:41:22:86",
    "24:6A:0E:CA:2C:F2",
    "B4:8C:9D:E8:DE:67"
    // B4-8C-9D-E8-DE-67
];

// Function to get the client's MAC address
const getClientMAC = () => {
    const nets = networkInterfaces();
    let mac = null;

    Object.values(nets).forEach((net) => {
        net.forEach((info) => {
            if (!info.internal && info.mac !== "00:00:00:00:00:00") {
                mac = info.mac.toUpperCase().replace(/-/g, ":"); // Normalize format
            }
        });
    });

    return mac;
};

// Middleware to check MAC address
const macAuthMiddleware = (req, res, next) => {
    const clientMAC = getClientMAC();

    if (!clientMAC || !allowedMACs.includes(clientMAC)) {
        return res.status(403).json({ message: "Access Denied: Unauthorized MAC Address" });
    }

    next();
};

module.exports = macAuthMiddleware;