var tradersTent = {
    quests: [
        {
            name: "Request For Lumber",
            desc: "Return 20 Pieces of Wood to the Traders' Tent",
            type: "Return Item",
            return: new Item("Wood", "Resource", 20),
            minRep: 0,
            maxRep: 5,
            reward: 30
        }
    ],
    onInteract: function() {
        if (player.quests.length === 0) {
            player.quests.push(tradersTent.quests[Math.floor(Math.random()*tradersTent.quests.length)])
            notifications.push({time: 3, size: 32, colour: "#ab9d33", text:"New Quest Recived!"})
        } else {
            for(let qu in player.quests) {
                let q = player.quests[qu]
                
                if(q.type === "Return Item") {
                    
                    for(let i in player.inventory.items) {
                        let item = player.inventory.items[i]
                        if(item !== null) {
                            
                            if(item.name == q.return.name) {
                                console.log(item.amount > q.return.amount, item.amount, q.return.amount)
                                if(item.amount > q.return.amount) {
                                    player.inventory.items[i].amount += -q.return.amount
                                    player.balance += q.reward
                                    player.quests.splice(qu, 1)
                                    notifications.push({time: 3, size: 32, colour: "#ab9d33", text:"Quest Completed!"})
                                }
                            }
                        }
                    }
                }
            }
        }
        //console.log(player.quests)
    }
}
