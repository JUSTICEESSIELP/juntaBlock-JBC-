import Block from "./block";
import { BlockConstructorType } from "./types/block.types";

const blockData: BlockConstructorType = {
  hash: "hash",
  lastHash: "lastHash",
  data: "data",
  date: new Date(),
};

const genesisJunta = new Block(blockData);
// console.log(genesisJunta);

// console.log(Block.genesis());
console.log(genesisJunta.mineBlock(Block.genesis()['hash'], "second data "));
