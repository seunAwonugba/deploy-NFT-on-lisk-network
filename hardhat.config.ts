import dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
const config: HardhatUserConfig = {
    solidity: "0.8.24",
    networks: {
        "lisk-sepolia": {
            url: process.env.LISK_SEPOLIA_URL,
            accounts: [String(process.env.ACCOUNT_PRIVATE_KEY)],
            gasPrice: 1000000000,
            chainId: 4202,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
        customChains: [
            {
                network: "lisk-sepolia",
                chainId: 4202,
                urls: {
                    apiURL: "https://sepolia-blockscout.lisk.com/api",
                    browserURL: "https://sepolia-blockscout.lisk.com",
                },
            },
        ],
    },
    sourcify: {
        enabled: true,
    },
};

export default config;
