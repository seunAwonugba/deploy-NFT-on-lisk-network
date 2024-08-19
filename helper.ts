import dotenv from "dotenv";
dotenv.config();

export const networkConfig: any = {
    4202: {
        name: "lisk-sepolia",
        walletAddress: process.env.WALLET_ADDRESS,
        chainId: 4202,
    },
};

export const developmentChains = ["hardhat", "localhost"];

export const LOCAL_NETWORK_ADDRESS = 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266;
