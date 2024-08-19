import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { network } from "hardhat";
import {
    developmentChains,
    LOCAL_NETWORK_ADDRESS,
    networkConfig,
} from "../helper";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    let senderAddress;
    const chainId: any = network.config.chainId;

    if (developmentChains.includes(network.name)) {
        senderAddress = LOCAL_NETWORK_ADDRESS;
    } else {
        senderAddress = networkConfig[chainId].walletAddress;
    }
    console.log(senderAddress);

    const deployNFT = await deploy("NFT_ON_LISK", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: 1,
    });

    console.log("NFT deployed!!!", deployNFT);

    // if (
    //     !developmentChains.includes(network.name) &&
    //     process.env.ETHERSCAN_API_KEY
    // ) {
    //     await verifyNft(deployNFT.address);
    // }
};
export default func;

func.tags = ["NFT_LISK"];
