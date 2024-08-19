import hre from "hardhat";
export const verifyNft = async (contractAddress: string) => {
    console.log("Verifying NFT contract");

    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            // constructorArguments: args,
        });
    } catch (error: any) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified");
        } else {
            console.log(error);
        }
    }
};

module.exports = { verifyNft };
