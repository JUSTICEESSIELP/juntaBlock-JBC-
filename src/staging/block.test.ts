import Block from "../block"
describe('Block', ()=>{
    let data:string, lastBlock:Block, block:Block
    beforeEach(()=>{ 

        data = 'bar'
        lastBlock = Block.genesis()
        block = Block.mineBlock( lastBlock.hash, data)
        

    })

    it('constructor function test', ()=>{

    })

    it ('add block to chain', ()=>{

    })

})