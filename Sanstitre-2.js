//	console.log('new obsel');
		    if(even=='trace:update:obsel')
			  {
				 
				var text2 = line.toString();
				var sep2 = text2[text2.search('[;\t]')];
		        csv2 = CSVToArray(text2,sep2);
			    csv2.map(function(line2) {
					
			   var tab = line2[1].split(','); 
			   var time2 = tab[0];
			   var type2 = tab[1];
		
			   var attributes2 = {};
				
			  for( var i=2; i < (tab.length+2)/2 ; i++) {
				
					if(tab[i] != "") 
					{
						attributes2[tab[i]] = tab[i+1];
						//alert(attributes2[tab[i]]);
					}
				}
				
				var obs_to_update;
				var new_obs ;
				trace.traceSet.forEach(function(obs){
					if(obs.timestamp==time)
					 {
					  obs_to_update = obs ;
					  
					 }
				 });
				 
				 
				 //alert(obs_to_update.id);
				 var new_obs = new Samotraces.Lib.Obsel(obs_to_update.id,time2,type2,attributes2);
				 //alert(new_obs.id);
				 //trace.removeObsel(obs_to_update);
				
				  //trace.newObsel(type2,time2,attributes2);
		
				 
				trace.updateObsel(obs_to_update,new_obs);
				
			   });
			  
		      } // JavaScript Document