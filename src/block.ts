import { BlockConstructorType } from "./types/block.types";
import crypto from "crypto";

class Block {
  private hash: string;
  private lastHash: string;
  private data: string ;
  private date: Date;

  constructor(constructorTypes: BlockConstructorType) {
    this.hash = constructorTypes.hash;
    this.lastHash = constructorTypes.lastHash;
    this.data = constructorTypes.data;
    this.date = constructorTypes.date;
  }

  static genesis(): Block {
    const defaultBlockData: BlockConstructorType = {
      hash: crypto.createHash("sha256").update("firsthas").digest("hex"),
      lastHash: "------",
      data: "defaultData",
      date: new Date(),
    };

    return new Block(defaultBlockData);
  }

  mineBlock(
    lastBlockHash: BlockConstructorType["hash"],
    data: BlockConstructorType["data"]
  ) {
    const newBlock: BlockConstructorType = {
      hash: crypto
        .createHash("sha256")
        .update(data + lastBlockHash)
        .digest("hex"),
      lastHash: lastBlockHash,
      data: data,
      date: new Date(),
    };
    return new Block(newBlock);
  }
}

export default Block;
