
const crypto = require('crypto');

const MIN_NODES=2
const MAX_NODES=1
const MAX_NODES2=MIN_NODES+MAX_NODES

const MAX_CAPACITY=10
const MIN_CAPACITY=3
const MAX_CAPACITY2=MAX_CAPACITY-MIN_CAPACITY
const LINKPOINTS=20
const PROB_VEI=70

this.allgames=function(fair,first_level){
	return new Promise(function(resolve,reject){
		var results=[]
		if(first_level==1){
			game_create(myfair,1).then(function(result){
				results.push(result)
				game_create(myfair,2).then(function(result2){
					results.push(result2)
					game_create(myfair,3).then(function(result3){
						results.push(result3)
						game_create(myfair,4).then(function(result4){
							results.push(result4)
							game_create(myfair,5).then(function(result5){
								results.push(result5)
								game_create(myfair,6).then(function(result6){
									results.push(result6)
									game_create(myfair,7).then(function(result7){
										results.push(result7)
										game_create(myfair,8).then(function(result8){
											results.push(result8)
											game_create(myfair,9).then(function(result9){
												results.push(result9)
												game_create(myfair,10).then(function(result10){
													results.push(result10)
													//console.log(results.length)							
													resolve(results)
												})
											})
										})
									})
								})
							})
						})
					})
				})	
			})		
		}

		if(first_level==2){
			game_create(myfair,2).then(function(result2){
				results.push(result2)
				game_create(myfair,3).then(function(result3){
					results.push(result3)
					game_create(myfair,4).then(function(result4){
						results.push(result4)
						game_create(myfair,5).then(function(result5){
							results.push(result5)
							game_create(myfair,6).then(function(result6){
								results.push(result6)
								game_create(myfair,7).then(function(result7){
									results.push(result7)
									game_create(myfair,8).then(function(result8){
										results.push(result8)
										game_create(myfair,9).then(function(result9){
											results.push(result9)
											game_create(myfair,10).then(function(result10){
												results.push(result10)
												resolve(results)
											})
										})
									})
								})
							})
						})
					})
				})
			})			
		}

		if(first_level==3){
			game_create(myfair,3).then(function(result3){
				results.push(result3)
				game_create(myfair,4).then(function(result4){
					results.push(result4)
					game_create(myfair,5).then(function(result5){
						results.push(result5)
						game_create(myfair,6).then(function(result6){
							results.push(result6)
							game_create(myfair,7).then(function(result7){
								results.push(result7)
								game_create(myfair,8).then(function(result8){
									results.push(result8)
									game_create(myfair,9).then(function(result9){
										results.push(result9)
										game_create(myfair,10).then(function(result10){
											results.push(result10)
											resolve(results)
										})
									})
								})
							})
						})
					})
				})
			})	
		}

		if(first_level==4){
			game_create(myfair,4).then(function(result4){
				results.push(result4)
				game_create(myfair,5).then(function(result5){
					results.push(result5)
					game_create(myfair,6).then(function(result6){
						results.push(result6)
						game_create(myfair,7).then(function(result7){
							results.push(result7)
							game_create(myfair,8).then(function(result8){
								results.push(result8)
								game_create(myfair,9).then(function(result9){
									results.push(result9)
									game_create(myfair,10).then(function(result10){
										results.push(result10)
										resolve(results)
									})
								})
							})
						})
					})
				})
			})
		}

		if(first_level==5){
			game_create(myfair,5).then(function(result5){
				results.push(result5)
				game_create(myfair,6).then(function(result6){
					results.push(result6)
					game_create(myfair,7).then(function(result7){
						results.push(result7)
						game_create(myfair,8).then(function(result8){
							results.push(result8)
							game_create(myfair,9).then(function(result9){
								results.push(result9)
								game_create(myfair,10).then(function(result10){
									results.push(result10)
									resolve(results)
								})
							})
						})
					})
				})
			})				
		}

		if(first_level==6){
			game_create(myfair,6).then(function(result6){
				results.push(result6)
				game_create(myfair,7).then(function(result7){
					results.push(result7)
					game_create(myfair,8).then(function(result8){
						results.push(result8)
						game_create(myfair,9).then(function(result9){
							results.push(result9)
							game_create(myfair,10).then(function(result10){
								results.push(result10)
								resolve(results)
							})
						})
					})
				})
			})
		}		

		if(first_level==7){	
			game_create(myfair,7).then(function(result7){
				results.push(result7)
				game_create(myfair,8).then(function(result8){
					results.push(result8)
					game_create(myfair,9).then(function(result9){
						results.push(result9)
						game_create(myfair,10).then(function(result10){
							results.push(result10)
							resolve(results)
						})
					})
				})
			})
		}

		if(first_level==8){		
			game_create(myfair,8).then(function(result8){
				results.push(result8)
				game_create(myfair,9).then(function(result9){
					results.push(result9)
					game_create(myfair,10).then(function(result10){
						results.push(result10)
						resolve(results)
					})
				})
			})
		}

		if(first_level==9){		
			game_create(myfair,9).then(function(result9){
				results.push(result9)
				game_create(myfair,10).then(function(result10){
					results.push(result10)
					resolve(results)
				})
			})
		}

		if(first_level==10){		
			game_create(myfair,10).then(function(result10){
				results.push(result10)
				resolve(results)
			})
		}
	})
}


game_create=function(fair,level_in){
	return new Promise(function(resolve,reject){
			myfair=fair
			var results2=[]
			fair_create_bob_invoice(myfair,level_in).then(function(bobinvoice0){
				var mybobinvoice=bobinvoice0.invoice
				results2.push(bobinvoice0.result)
				myfair.nonce=myfair.nonce+1
				fair_create_levels(myfair,level_in,results2).then(function(levels){
					var mylevels=levels.levels
					myfair.nonce=levels.nonce
					results2=levels.results
					fair_create_nodes(myfair,mylevels,results2,level_in).then(function(levels2){
						var mynodes=levels2.nodes
						myfair.nonce=levels2.nonce
						results2=levels2.results
						fair_create_links(myfair,levels2.nodes,mylevels,results2,level_in).then(function(links){
							myfair.nonce=links.nonce
							results2=links.results
							create_channels(myfair,links.nodes,level_in,results2).then(function(channels0){
								var mychannels=channels0.channels
								results2=channels0.results
								resolve(results2)	
							})
						})
					})
				})
			})
	})			
}

fair_create_bob_invoice=function(fair_in,level_in){
	return new Promise(function(resolve,reject){
		var bobinvoice=1
		var value0=fair_random(fair_in)
		switch(level_in){
			case 1: //
				bobinvoice=Math.floor(((value0/100)*2)+1)
				break
			case 2:
				bobinvoice=Math.floor(((value0/100)*2)+1)
				break
			case 3:
				bobinvoice=Math.floor(((value0/100)*3)+1)
				break
			case 4:
				bobinvoice=Math.floor(((value0/100)*2)+1)
				break
			case 5:
				bobinvoice=Math.floor(((value0/100)*3)+1)
				break
			case 6:
				bobinvoice=Math.floor(((value0/100)*4)+1)
				break
			case 7:
				bobinvoice=Math.floor(((value0/100)*2)+1)
				break
			case 8:
				bobinvoice=Math.floor(((value0/100)*3)+1)
				break
			case 9:
				bobinvoice=Math.floor(((value0/100)*4)+1)
				break
			case 10:
				bobinvoice=Math.floor(((value0/100)*5)+1)
				break
			default:
				bobinvoice=100				
		}
		var result2={nonce: fair_in.nonce, result: value0, level: level_in,what: 'bobinvoice', value: bobinvoice }
		var resp={invoice: bobinvoice, result: result2}
		resolve(resp)
	})	
}

fair_create_levels=function(fair_in,levels_in,results_in){
	return new Promise(function(resolve,reject){
		var levels0=[]
		var n=0
		var mylevels=0
		switch(levels_in){
			case 1:
				mylevels=3
				break
			case 2:
				mylevels=4
				break
			case 3:
				mylevels=4
				break
			case 4:
				mylevels=5
				break
			case 5:
				mylevels=5
				break
			case 6:
				mylevels=5
				break
			case 7:
				mylevels=6
				break
			case 8:
				mylevels=6
				break
			case 9:
				mylevels=6
				break
			case 10:
				mylevels=7
				break
			default:
				mylevels=10
		}
		while (n < mylevels) {
			var nlevel={}
			nlevel.level=n
			if(n==0){ //level 0 -> 1 node
				nlevel.num_nodes=1
				nlevel.nodes=create_nodes_list(1)
				levels0.push(nlevel) 
				n+= 1;  
			}else{ 									//targed node
				if(n==(mylevels-1)){
					nlevel.num_nodes=1
					nlevel.nodes=create_nodes_list(1)
					levels0.push(nlevel) 
					n+= 1;  
				}else{
					var value0=fair_random(fair_in)
					nlevel.num_nodes=Math.floor((value0/100)*MAX_NODES2)+MIN_NODES;
					var result2={nonce: fair_in.nonce, result: value0, level: levels_in,what: 'hop '+n+' nodes', value: nlevel.num_nodes }
					results_in.push(result2)
					nlevel.nodes=create_nodes_list(nlevel.num_nodes)
					fair_in.nonce=fair_in.nonce+1
					levels0.push(nlevel) 
					n+= 1;  
				}
			}
		}
		var resp={levels: levels0, nonce: fair_in.nonce, results: results_in}
		resolve(resp)
	})
}

fair_create_nodes=function(fair_in,levels_in,results_in,level_in){
	return new Promise(function(resolve,reject){
		var numlevels=levels_in.length
		var levels0=levels_in
		var nodes0=[]
		var n=0
		var x_offset=20
		while(n<(numlevels)){
				var i=0
				var nnodes=levels_in[n].num_nodes
				while(i<nnodes){
					var node={}
					node.id=i
					node.level=n
					node.id2=n+''+i
					if(n==0){	//source node
						node.info='alice'
						node.name='alice'
						node.issource=true
						node.nchan=levels_in[1].num_nodes
						node.linkvei=false
						node.istarget=false
						nodes0.push(node)
						i=i+1
						n+=1;
					}else{
						if(n==(numlevels-1)){
							node.info='bob'
							node.name='bob'
							node.issource=false
							node.linkvei=false
							node.istarget=true
							nodes0.push(node)
							i=100
							n=n+1
						}else{
							node.info='node'
							node.issource=false
							if(i>0 && i<(nnodes-1)){
								var val=fair_random(fair_in)
								var vei=Math.floor(val)
								if(vei<=PROB_VEI){
									node.linkvei=true
									var result2={nonce: fair_in.nonce, result: val, level: level_in,what: 'node'+n+''+i+' neigh', value: node.linkvei }
									results_in.push(result2)
								}else{
									node.linkvei=false
									var result2={nonce: fair_in.nonce, result: val, level: level_in,what: 'node'+n+''+i+' neigh', value: node.linkvei }
									results_in.push(result2)
								}
								fair_in.nonce=fair_in.nonce+1
							}else{
								node.linkvei=false
							}
							var val0=fair_random(fair_in)
							node.nchan=Math.floor((val0/100)*levels_in[n+1].num_nodes)+1;
							var result3={nonce: fair_in.nonce, result: val0, level: level_in,what: 'node'+n+''+i+' nchan', value: node.nchan }
							results_in.push(result3)
							fair_in.nonce=fair_in.nonce+1
							nodes0.push(node)
							i+=1
							if(i==(nnodes)){
									n+=1
							} 
						}
					}
			}
		}
		var resp={nodes: nodes0, nonce: fair_in.nonce, results: results_in}
		resolve(resp)
	})
}

fair_create_links=function(fair_in,nodes_in,levels_in,results_in,level_in){
	return new Promise(function(resolve,reject){
		var i=0
		var new_nodes=[]
		var results2=[]
		while(i<(nodes_in.length)){
			const node=nodes_in[i]
			var numlevel=nodes_in[i].level
			//console.log(nextnodes)
			if(i<(nodes_in.length-1)){
				var nextnodes=levels_in[numlevel+1].nodes
				fair_shuffle_level_nodes(fair_in,nextnodes,results_in,level_in).then(function(shuffled){
					node.links=shuffled.list
					results_in=shuffled.results
					new_nodes.push(node)
					fair_in.nonce=shuffled.nonce
					i=i+1;
				})
				i=i+1;
			}else{
				new_nodes.push(node)
				var resp={nodes: new_nodes, nonce: fair_in.nonce, results: results_in}
				resolve(resp)
				i=i+1
			}
		}
	})
}

create_channels=function(fair_in,nodes_in,level_in,results_in){
    return new Promise(function(resolve,reject){
    	var i=0
    	var channels0=[]
    	var numnodes=nodes_in.length
    	while(i<numnodes){
    		var level=nodes_in[i].level
    		var nchan=nodes_in[i].nchan
    		var j=0
    		if(nodes_in[i].linkvei){
				var canalvei={}
				canalvei.source=nodes_in[i].id2
				var indexvei=i-1
				canalvei.target=nodes_in[indexvei].id2
				canalvei.id=canalvei.source+''+canalvei.target
				var val0=fair_random(fair_in)
				canalvei.capacity= Math.floor((val0/100) * (MAX_CAPACITY-MIN_CAPACITY))+MIN_CAPACITY;
				var result2={nonce: fair_in.nonce, result: val0, level: level_in,what: 'chan '+canalvei.id+' sats', value: canalvei.capacity }
				results_in.push(result2)
				fair_in.nonce=fair_in.nonce+1
				var val1=fair_random(fair_in)
				canalvei.source_cap=Math.floor((val1/100)*canalvei.capacity)
				var result3={nonce: fair_in.nonce, result: val1, level: level_in,what: 'chan '+canalvei.id+' source sats', value: canalvei.source_cap }
				results_in.push(result3)
				fair_in.nonce=fair_in.nonce+1
				canalvei.target_cap=canalvei.capacity-canalvei.source_cap
				channels0.push(canalvei)
    		}
    		while(j<nchan){	
	    			var newchannel={}
	    			var targetlevel=level+1
	    			newchannel.source=nodes_in[i].id2
					newchannel.target=targetlevel+''+nodes_in[i].links[j]
					var targetnode=get_node_info(newchannel.target,nodes_in)
					newchannel.id=newchannel.source+''+newchannel.target
					var val0=fair_random(fair_in)
					newchannel.capacity= Math.floor((val0/100) * (MAX_CAPACITY-MIN_CAPACITY))+MIN_CAPACITY;
					var result2={nonce: fair_in.nonce, result: val0, level: level_in,what: 'chan '+newchannel.id+' sats', value: newchannel.capacity }
					results_in.push(result2)
					fair_in.nonce=fair_in.nonce+1
					var val1=fair_random(fair_in)
					newchannel.source_cap=Math.floor((val1/100)*newchannel.capacity)
					var result3={nonce: fair_in.nonce, result: val1, level: level_in,what: 'chan '+newchannel.id+' source sats', value: newchannel.source_cap }
					results_in.push(result3)
					fair_in.nonce=fair_in.nonce+1
					newchannel.target_cap=newchannel.capacity-newchannel.source_cap
					channels0.push(newchannel)
					j=j+1	
    		}
    		i=i+1

    	}
    	var resp={channels: channels0, nonce: fair_in.nonce, results: results_in}
    	resolve(resp)
	})	
}

fair_random=function(fair_in){ 
    const text = fair_in.client_seed + '-' + fair_in.nonce;
      const hash = crypto.createHmac('sha512', fair_in.server_seed).update(text).digest('hex');
      let index = 0;
      let rollResult = parseInt(hash.substring(index * 5, index * 5 + 5), 16);
      while (rollResult >= Math.pow(10, 6)) {
        index++;
        rollResult = parseInt(hash.substring(index * 5, index * 5 + 5), 16);
        if (index * 5 + 5 > 128) {
            rollResult = 99.99;
            break;
        }
      }
      rollResult %= Math.pow(10, 4);
      rollResult /= Math.pow(10, 2);
      return(rollResult)
}
create_nodes_list=function(num_nodes){
		var list=[]
		for(var i=0;i<num_nodes;i++){
			list.push(i)
		}
		return(list)
}

fair_shuffle_level_nodes=function(fair_in,nodes_in,results_in,level_in) {
    return new Promise(function(resolve,reject){
      var currentIndex = 0, temporaryValue, randomIndex;
      var random=0
      var used=[]
      var mypremis=[]
      while (currentIndex < (nodes_in.length)) {
      	  var val0=fair_random(fair_in)
          randomIndex = Math.floor((val0/100) * nodes_in.length);
			var result3={nonce: fair_in.nonce, result: val0, level: level_in,what: 'shufflenodes', value: randomIndex }
			results_in.push(result3)
          fair_in.nonce=fair_in.nonce+1
          if(used.indexOf(randomIndex)==-1){
            used.push(randomIndex)
            mypremis[currentIndex]=nodes_in[randomIndex]
            currentIndex += 1;
            if(currentIndex==(nodes_in.length)){
            	var resp={list: mypremis, nonce: fair_in.nonce, results: results_in}
    			resolve(resp)
            }
          }else{
            //console.log("index repetit")
          }
      }
    
  })
};

get_node_info=function(id2_in,nodes_in){
	for(var i=0;i<nodes_in.length;i++){
		if(nodes_in[i].id2==id2_in){
			return nodes_in[i]
		}
	}
}